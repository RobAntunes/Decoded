import { Icon as IIcon, IconProps } from "@phosphor-icons/react";
import { JSX } from "react";

const Button = (
    { variant, Icon, className, children }: {
        "variant": "primary" | "secondary" | "tertiary";
        Icon: { Icon: IIcon; props: IconProps };
        className?: string;
        children: JSX.Element | JSX.Element[];
    },
) => {
    if (variant === "primary") {
        return (
            <button
                type="button"
                className={`${className} flex font-semibold items-center px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 hover:cursor-pointer`}
            >
                {children}
                {Icon.Icon
                    ? (
                        <span className="ml-2">
                            <Icon.Icon {...Icon.props} />
                        </span>
                    )
                    : null}
            </button>
        );
    } else {
        <button
            className={`${className} flex font-semibold mt-8 items-center p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 hover:cursor-pointer`}
        >
            {children}
        </button>;
    }
};

export default Button;
