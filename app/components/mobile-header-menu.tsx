import {
    CloseButton,
    Popover,
    PopoverButton,
    PopoverPanel,
} from "@headlessui/react";
import { Menu, Minus, Plus, X } from "lucide-react";
import { Link } from "react-router";


export const MobileHeaderMenu = () => {
    return (
        <Popover className="relative group">
            <PopoverButton className="outline-none text-blue-100">
                <Menu size={32}
                    className="absolute group-data-[open]:opacity-0 group-data-[open]:rotate-90 transition-all duration-300" />
                <X size={32}
                    className="opacity-0 group-data-[open]:opacity-100 group-data-[open]:rotate-90 transition-all duration-300" />
            </PopoverButton>

            <PopoverPanel transition anchor="top start" className="transition z-20 duration-500 ease-out flex flex-col items-start space-y-5 mt-4 py-24 w-full h-screen
                data-closed:-translate-y-8 data-closed:opacity-0 backdrop-blur-md text-lg font-semibold">
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
