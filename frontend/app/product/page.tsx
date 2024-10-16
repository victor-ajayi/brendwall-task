"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    colour: "",
    vendor: "",
  });

  const router = useRouter();

  async function handleSubmit() {
    // Create product
    axios
      .post("http://localhost:8000/api/products", formData)
      .then(function (response) {
        if (response.status == 201) {
          router.replace("/");
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <div className="contents">
      <form
        className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/30 py-6 px-8 w-[75%] max-w-[800px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-medium text-lg">Создать продукт</h1>
        <p className="text-sm">Введите данные продукта</p>
        <input
          className="text-[14px] mt-3 border rounded-[10px] py-1 px-3 placeholder:text-[14px] focus:outline-slate-300"
          type="text"
          placeholder="Название"
          name="name"
          required
          onChange={handleChange}
          value={formData.name}
        />
        <input
          className="text-[14px] border rounded-[10px] py-1 px-3 placeholder:text-[14px] focus:outline-slate-300"
          type="text"
          placeholder="Описание"
          name="description"
          required={false}
          onChange={handleChange}
          value={formData.description}
        />
        <input
          className="text-[14px] border rounded-[10px] py-1 px-3 placeholder:text-[14px] focus:outline-slate-300"
          type="number"
          placeholder="Цена"
          name="price"
          required
          min={0}
          onChange={handleChange}
          value={formData.price}
        />
        <input
          className="text-[14px] border rounded-[10px] py-1 px-3 placeholder:text-[14px] focus:outline-slate-300"
          type="text"
          placeholder="Цвет"
          name="colour"
          required={false}
          onChange={handleChange}
          value={formData.colour}
        />
        <input
          className="text-[14px] border rounded-[10px] py-1 px-3 placeholder:text-[14px] focus:outline-slate-300"
          type="text"
          placeholder="Продавец"
          name="vendor"
          onChange={handleChange}
          value={formData.vendor}
        />
        <button
          className="mt-3 rounded-xl py-2 px-4 border text-white text-[14px] bg-slate-950 border-slate-50 w-fit self-center"
          type="submit"
          onClick={handleSubmit}
        >
          Создать
        </button>
      </form>
      <Link href={"/"} className="mt-12 rounded-xl px-4 py-2 bg-slate-200">
        Назад
      </Link>
    </div>
  );
}
