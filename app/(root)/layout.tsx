import Header from "@/components/Header";
import React from "react";

type Props = {
	children: React.ReactNode;
};

export default function layout({ children }: Props) {
	return (
		<main className="min-h-screen text-gray-400">
			<Header />
			<div className="container py-10">{children}</div>
		</main>
	);
}
