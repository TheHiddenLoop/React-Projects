export function ImageCard({ image, title }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-40 object-cover"
      />
    </div>
  );
}
