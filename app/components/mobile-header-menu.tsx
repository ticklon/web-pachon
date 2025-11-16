import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useScrollLock } from "~/hook/useScrollLock";
import { navMenu } from "~/components/Header";

const PopoverScrollLocker = ({ open }: {open: boolean}) => {
  useScrollLock(open);
  return null; // このコンポーネントは見た目のレンダリングは不要
};

export const MobileHeaderMenu = () => {
  return (
    <Popover className="relative group">
      {({ open }) => (
        <>
          <PopoverScrollLocker open={open} />
          <PopoverButton className="outline-none z-50 mt-1">
            <Menu
              size={32}
              className="z-50 absolute text-gray-500 group-data-[open]:opacity-0 group-data-[open]:rotate-90 transition-all duration-300"
            />
            <X
              size={32}
              className="z-50 opacity-0 text-red-500 group-data-[open]:opacity-100 group-data-[open]:rotate-90 transition-all duration-300"
            />
          </PopoverButton>

          <PopoverPanel
            transition
            anchor="top start"
            className="transition z-30 duration-500 ease-out flex flex-col justify-items-end text-right space-y-5 mt-2 py-24 w-full h-screen min-h-screen
        bg-black/50 backdrop-blur-md
                data-closed:-translate-y-8 data-closed:opacity-0 text-lg font-semibold"
          >
            {navMenu.map((item) => (
              <div key={item.name} className="w-full text-dream-skyblue px-2 pt-4 border-t border-t-blue-200/25">
                <CloseButton as={Link} to={`${item.url}`}>
                  {item.name}
                </CloseButton>
              </div>
            ))}
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
};
