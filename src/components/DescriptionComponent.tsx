import Image from "next/image";

export default function DescriptionComponent() {
  return (
    <div className="mx-auto">
      <div className="flex m-5 items-center">
        <Image
          width={1000}
          height={1000}
          className="w-40 h-40 rounded-full"
          src="/profile_picture.jpg"
          alt="Profile Picture"
        />
      </div>
      <h2 className="text-4xl font-bold">Dominic Bieri</h2>
      <h3 className="text-3xl font-semibold">Software Engineer</h3>
      <p className="mt-6 w-auto text-lg">
        As a Full Stack Developer I create seamless solutions for web and backend.
      </p>
    </div>
  );
}
