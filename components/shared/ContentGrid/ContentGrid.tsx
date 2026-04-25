"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

export interface GridItem {
    id: string | number;
    title: string;
    category: string;
    href: string;
    date?: string;
    image?: string;
    previewText?: string;
}

export interface ContentGridProps {
    items: GridItem[];
    readMoreText?: string;
    fallbackIcon?: string;
}

export default function ContentGrid({
    items,
    readMoreText = "Read Article",
    fallbackIcon = "📝",
}: ContentGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {items.map((item, idx) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <Link
                        href={item.href}
                        className="group block bg-[#050505] border border-zinc-900 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-all duration-500 hover:scale-[1.02]"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-48 overflow-hidden bg-zinc-900">
                            {item.image ? (
                                <Image
                                    src={item.image.startsWith('/') ? item.image : `/${item.image}`}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    onError={(e) => {
                                        // Fallback if image fails to load
                                        const target = e.currentTarget;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                            const fallback = document.createElement('div');
                                            fallback.className = 'w-full h-full flex items-center justify-center bg-zinc-900';
                                            fallback.innerHTML = `
                                                <div class="text-center">
                                                    <div class="text-4xl mb-2">${fallbackIcon}</div>
                                                    <div class="text-[10px] font-mono text-zinc-600">${item.category}</div>
                                                </div>
                                            `;
                                            parent.appendChild(fallback);
                                        }
                                    }}
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                                    <div className="text-center">
                                        <div className="text-4xl mb-2">{fallbackIcon}</div>
                                        <div className="text-[10px] font-mono text-zinc-600">{item.category}</div>
                                    </div>
                                </div>
                            )}

                            {/* Category Badge */}
                            <div className="absolute top-3 left-3 z-10">
                                <span className="px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm text-[8px] font-black text-emerald-500 uppercase tracking-wider">
                                    {item.category.replace("_", " ")}
                                </span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-5 space-y-3">
                            {/* Date */}
                            {item.date && (
                                <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-600">
                                    <Calendar size={10} />
                                    <span>
                                        {new Date(item.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </span>
                                </div>
                            )}

                            {/* Title */}
                            <h3 className="text-lg font-black uppercase tracking-tighter leading-tight group-hover:text-emerald-400 transition-colors line-clamp-2">
                                {item.title}
                            </h3>

                            {/* Preview */}
                            {item.previewText && (
                                <p className="text-zinc-500 text-xs font-mono line-clamp-2">
                                    {item.previewText}
                                </p>
                            )}

                            {/* Read More Link */}
                            <div className="flex items-center justify-end pt-2">
                                <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-600 group-hover:text-emerald-500 transition-colors">
                                    {readMoreText}
                                    <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}