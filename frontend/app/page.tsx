"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        className="self-center mt-10 text-[14px] rounded-xl py-2 px-4 bg-[#eef2f3] text-[#FE0925] cursor-pointer"
        onClick={handleClick}
      >
        Удалить все продукты
      </div>
    );
  };

  return (
    <div className="flex flex-col w-[85%] max-w-[1000px]">
      <main className="flex mb-10 text-center gap-4">
        <p className="self-center">
          {products.length == 1 ? "Создан" : "Создано"} <b>{products.length}</b>{" "}
          продукт
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

      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Название</TableHead>
            <TableHead className="">Описание</TableHead>
            <TableHead className="w-[15%]">Цена</TableHead>
            <TableHead className="w-[10%]">Цвет</TableHead>
            <TableHead className="text-right w-[100px]">Продавец</TableHead>
            <TableHead className="text-center w-[8%]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.length > 0 &&
            products.map((product) => {
              return (
                <TableRow className="group">
                  <TableCell>{product.name}</TableCell>
                  <TableCell className="">{product.description}</TableCell>
                  <TableCell className="w-[15%] ">
                    {Number(product.price).toLocaleString("ru-RU", {
                      style: "currency",
                      currency: "RUB",
                    })}
                  </TableCell>
                  <TableCell className="w-[10%]">{product.colour}</TableCell>
                  <TableCell className="text-right w-[100px]">
                    {product.vendor}
                  </TableCell>
                  <TableCell className="flex justify-center">
                    <DeleteIcon
                      className="text-[#FE0925]"
                      size={18}
                      productID={product.id}
                      state={products}
                      setState={setProducts}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>

      {products?.length > 0 && <DeleteAll />}
    </div>
  );
}
