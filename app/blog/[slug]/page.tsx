// app/blog/[slug]/page.tsx

export async function generateStaticParams() {
  // Giả sử bạn có một danh sách các slug từ API hoặc từ một nguồn dữ liệu
  const slugs = ["slug1", "slug2", "slug3"];

  // Trả về danh sách các slug dưới dạng các object chứa `params`
  return slugs.map(slug => ({
    slug
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Nội dung của trang blog dựa trên `params.slug`
  return <div>Slug: {params.slug}</div>;
}
