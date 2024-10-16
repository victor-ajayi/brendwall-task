"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DeleteIcon } from "./icons";

export default function Main() {
  const [products, setProducts] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get("http://localhost:8000/api/products", {
          method: "GET",
        });
        const data = res.data;
        setProducts((prevData) => data);
      } catch (err) {
        console.error(err);
      }
    }
    getProducts();
  }, []);

  const DeleteAll = () => {
    function handleClick() {
      axios
        .post(`http://localhost:8000/api/products/delete`)
        .then(() => {
          setProducts([]);
          router.push("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }

    return (
      <div
        className="self-center mt-5 rounded-xl py-2 px-4 bg-[#eef2f3] text-red-700 cursor-pointer"
        onClick={handleClick}
      >
        Удалить все продукты
      </div>
    );
  };

  return (
    <div className="flex flex-col w-[75%] max-w-[800px]">
      <main className="flex mb-10 text-center gap-4">
        <p className="self-center">
          Создано <b>{products.length}</b> продукт
          {products.length == 1
            ? ""
            : products.length == 2 || products.length == 3
            ? "а"
            : "ов"}
        </p>
        <Link
          className="inline-block ml-auto rounded-xl py-2 px-4 border text-white text-[14px] bg-slate-800 hover:bg-slate-600 border-slate-50 w-fit self-center cursor-pointer transition-all ease-in-out duration-200"
          href="/product"
        >
          Создать продукт
        </Link>
      </main>

      {products?.length > 0 &&
        products.map((product) => {
          return (
            <div
              className="flex gap-4 w-full border rounded-2xl px-4 py-4 mb-3"
              key={product.id}
            >
              <div className="border rounded-full size-[50px] bg-gray-300"></div>
              <div className="w-[90%]">
                <div className="flex">
                  <p className="">{product.name}</p>
                  <div className="ml-auto mr-3 ">
                    <p className="font-semibold">
                      {Number(product.price).toLocaleString("ru-RU", {
                        style: "currency",
                        currency: "RUB",
                      })}
                    </p>
                  </div>
                  <DeleteIcon
                    className="p-1 pt-[2px]"
                    productID={product.id}
                    state={products}
                    setState={setProducts}
                  />
                </div>
                <div className="text-[14px] text-slate-800/60 mb-3">
                  {product.description}
                </div>
                {product.colour && (
                  <div className="text-[14px] ">
                    <b>Цвет</b>: {product.colour}
                  </div>
                )}
                {product.vendor && (
                  <div className="text-[14px]">
                    <b>Продавец</b>: {product.vendor}
                  </div>
                )}
              </div>
            </div>
          );
        })}

      {products?.length > 0 && <DeleteAll />}
    </div>
  );
}
