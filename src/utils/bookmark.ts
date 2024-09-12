// src/utils/bookmark.ts

export interface BookmarkedPost {
  slug: string;
  title: string;
  date: string;
}

export function getBookmarks(): BookmarkedPost[] {
  if (typeof window === "undefined") return [];
  const bookmarks = localStorage.getItem("bookmarks");
  return bookmarks ? JSON.parse(bookmarks) : [];
}

export function addBookmark(post: BookmarkedPost): void {
  const bookmarks = getBookmarks();
  if (!bookmarks.some((b) => b.slug === post.slug)) {
    bookmarks.push(post);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
}

export function removeBookmark(slug: string): void {
  const bookmarks = getBookmarks().filter((b) => b.slug !== slug);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

export function isBookmarked(slug: string): boolean {
  return getBookmarks().some((b) => b.slug === slug);
}
