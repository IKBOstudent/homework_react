import { Roboto } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StoreProvider from "@/redux/StoreProvider";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["cyrillic", "latin"],
});

export const metadata = {
    title: "Билетопоиск",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <StoreProvider>
                    <div id="app-container">
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </div>

                    <div id="modal-container"></div>
                    <div id="popover-container"></div>
                </StoreProvider>
            </body>
        </html>
    );
}
