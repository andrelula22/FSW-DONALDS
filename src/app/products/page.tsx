import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Products = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="p-5 text-red-500">Products Home Page</h1>
      <Button>FSW 7.0</Button>
      <Input placeholder="Testando input" />
    </div>
  );
};

export default Products;
