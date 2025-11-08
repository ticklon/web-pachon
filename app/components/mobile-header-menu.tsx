import {
    CloseButton,
    Popover,
    PopoverBackdrop,
    PopoverButton,
    PopoverPanel,
} from "@headlessui/react";
import { Menu, Minus, Plus, X } from "lucide-react";
import { Link } from "react-router";


export const MobileHeaderMenu = () => {
    return (
        <Popover className="relative group">
      <PopoverBackdrop className="z-20 fixed inset-0 bg-black/50 backdrop-blur-lg" />
            <PopoverButton className="outline-none z-50">
                <Menu size={32}
                    className="z-50 absolute text-gray-500 group-data-[open]:opacity-0 group-data-[open]:rotate-90 transition-all duration-300" />
                <X size={32}
                    className="z-50 opacity-0 text-red-500 group-data-[open]:opacity-100 group-data-[open]:rotate-90 transition-all duration-300" />
            </PopoverButton>

            <PopoverPanel transition anchor="top start" className="transition z-50 duration-500 ease-out flex flex-col items-start space-y-5 mt-4 py-24 w-full h-svh
                data-closed:-translate-y-8 data-closed:opacity-0 text-lg font-semibold">
                <div className="w-full text-dream-skyblue px-2 pt-4 border-t border-t-blue-200/25">
                    <CloseButton as={Link} to="/">
                        トップページ
                    </CloseButton>
                </div>
                <div className="w-full text-dream-skyblue px-2 pt-4 border-t border-t-blue-200/25">
                    <CloseButton as={Link} to="/about">
                        このサイトについて
                    </CloseButton>
                </div>
                <div className="w-full text-dream-skyblue px-2 pt-4 border-t border-t-blue-200/25">
                    <CloseButton as={Link} to="/contact">
                        お問い合わせ
                    </CloseButton>
                </div>
                <div className="w-full text-dream-skyblue px-2 pt-4 border-t border-t-blue-200/25">
                    <CloseButton as={Link} to="/privacy-policy">
                        プライバシーポリシー
                    </CloseButton>
                </div>
                <div className="w-full text-dream-skyblue px-2 pt-4 border-t border-t-blue-200/25">
                    <CloseButton as={Link} to="/legal-tokushohou">
                        特定商取引法に基づく表記
                    </CloseButton>
                </div>
                <div className="w-full text-dream-skyblue px-2 pt-4 border-t border-t-blue-200/25">
                    <CloseButton as={Link} to="/links">
                        リンク集
                    </CloseButton>
                </div>
            </PopoverPanel>
        </Popover>
    );
};
