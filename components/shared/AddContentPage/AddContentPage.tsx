import { useState } from 'react';

import { BlogArticle } from '@/data/lists/blogArticle';
import { AdminHeader, AdminFormCard, AdminPayloadPreview } from '@/components/shared/index';
import ScreenContainer from '@/components/shared/ScreenContainer/ScreenContainer';
import BlogArticleForm from '@/components/shared/BlogArticleForm/BlogArticleForm';

export default function AddBlogPage() {
    const [submittedData, setSubmittedData] = useState<BlogArticle | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = async (article: BlogArticle) => {
        setIsLoading(true);
        // Smooth scroll to the output for better UX on mobile
        if (window.innerWidth < 1024) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }

        try {
            // Transmit payload to the Next.js API Route
            const response = await fetch('/api/blogs/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(article),
            });

            const result = await response.json();
            if (!response.ok) {
                console.error("Uplink failed:", result.message);
            } else {
                console.info("Uplink successful:", result.data);
                // Update the view with the successfully committed payload
                setSubmittedData(result.data || article);
            }
        } catch (error) {
            console.error("Fatal error during uplink:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ScreenContainer>
            <AdminHeader
                title="Content"
                highlight="Uplink"
                subtitle="Auth: Administrator // Schema: Blog_Article_v1"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Form Section */}
                <AdminFormCard title="Entry_Parameters">
                    <BlogArticleForm onArticleSubmit={handleFormSubmit} />
                </AdminFormCard>

        
                <AdminPayloadPreview data={submittedData} isLoading={isLoading} />
            </div>
        </ScreenContainer>
    );
}
