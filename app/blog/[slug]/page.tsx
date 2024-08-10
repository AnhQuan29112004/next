type Params = {
  params: {
    slug: string;
  };
};
export async function generateStaticParams() {
  // Giả sử bạn có một danh sách các slug từ API hoặc từ một nguồn dữ liệu
  const slugs = ["slug1", "slug2", "slug3"];

  // Trả về danh sách các slug dưới dạng các object chứa `params`
  return slugs.map(slug => ({
    slug
  }));
}
export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}
