import Image from "next/image";

export default function Beef() {
    const imageCount = 44;
    const images = Array.from({ length: imageCount }, (_, i) => `/PNG-Main-Menu/${i + 1}.webp`).slice(42,44);

    return (
        <div className="">
            {images.map((src, index) => (
                <Image
                    priority
                    key={index}
                    src={src}
                    alt="Menu Jinmu"
                    width={1200}
                    height={0}
                    layout="intrinsic"
                />
            ))}
        </div>
    )
}