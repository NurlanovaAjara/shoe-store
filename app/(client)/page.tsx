import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import { getCategories } from "@/sanity/queries";
export default async function Home() {
const categories = await getCategories(6);
console.log(categories);
return (
<Container>
<HomeBanner />
<div className="py-10">
<ProductGrid />
</div>
</Container>
);
}