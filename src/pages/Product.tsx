import { useParams } from "@solidjs/router";
import { Show, createResource, createSignal } from "solid-js";
import { useCartContext } from "../context/CartContext";
import { Product as ProductModel } from "../models/product.model";

async function fetchProduct(id: any): Promise<ProductModel> {
	const res = await fetch('http://localhost:4000/products/'+id);

	return res.json();
}

export default function Product() {
	const params = useParams();
	const [product] = createResource(params.id, fetchProduct);
	const [adding, setAdding] = createSignal(false);
	const {items, setItems} = useCartContext();

	const addProduct = () => {
		setAdding(true);

		setTimeout(() => {
			setAdding(false)
		}, 2000);
		// Check if product exists
		const exists = items.find(p => p.id === product()!.id);

		if (exists) {
			// Increase quantity of product
			setItems((p: ProductModel) => p.id === product()!.id, "quantity", (q: number) => q + 1)
		}

		if (!exists) {
			setItems([...items, {...product(), quantity: 1}])
		}
	}

	return (
		<div class="my-7">
			<Show when={product()} fallback={<p>Loading...</p>}>
				<div class="grid grid-cols-5 gap-7">

					<div class="col-span-2">
						<img src={product()!.img} alt="Product Image" />
					</div>

					<div class="col-span-3">
						<h2 class="text-3xl font-bold mb-7">{product()!.title}</h2>
						<p>{product()!.description}</p>
						<p class="my-7 text-2xl">Only £{product()!.price}</p>
						<button class="btn" onClick={addProduct} disabled={adding()}>Add to cart</button>
						<Show when={adding()}>
							<div class="m-2 p-2 border-space border-2 rounded-md inline-block">
								"{product()!.title}" was added to the cart
							</div>
						</Show>
					</div>

				</div>
			</Show>
		</div>
	);
}