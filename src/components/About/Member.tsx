/* eslint-disable @next/next/no-img-element */
export default function Member({
  name,
  role,
  img,
}: {
  name: string;
  role?: string;
  img: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={img}
        alt="Team member photo"
        className="w-64 h-64 rounded-full object-cover object-top"
      />
      <p className="text-xl text-gray-700 font-semibold mt-2 text-center">
        {name}
      </p>
      <p className="text-center">{role}</p>
    </div>
  );
}
