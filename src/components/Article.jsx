import Image from "next/image";

const articles = [
  {
    id: 1,
    category: "Food Delivery",
    title: "Creative Packaging as a Successful Marketing Move",
    date: "December 8, 2019",
    views: 1,
    comments: 0,
    image: "/Food/food-packing.jpg",
  },
  {
    id: 2,
    category: "Food Delivery",
    title: "Modern Food Delivery Services Overview",
    date: "November 9, 2019",
    views: 1,
    comments: 0,
    image: "/Food/food-delivery.jpg",
  },
  {
    id: 3,
    category: "Grocery",
    title: "Bottled Water Home Delivery Companies",
    date: "November 30, 2018",
    views: 2,
    comments: 1,
    image: "/Food/water.jpeg",
  },
];

const Article = () => {
  return (
    <section className="w-11/12 mx-auto py-12 px-4">
      <h3 className="text-yellow-500 text-center font-semibold">Our Blog</h3>
      <h2 className="text-4xl font-bold text-center mb-8">Recent Articles</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Featured Article */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden group">
          <div className="overflow-hidden">
            <Image
              src="/Food/food-order.jpg"
              alt="Featured article"
              width={800}
              height={400}
              className="w-full h-96 object-cover transition-transform duration-300 hover:scale-125"
            />
          </div>
          <div className="p-6">
            <span className="bg-yellow-500 text-white px-3 py-1 text-sm rounded-full">
              Food Delivery
            </span>
            <h3 className="text-2xl font-bold hover:text-yellow-500 mt-3">
              All City Cafes and Restaurants Switched to Delivery Mode
            </h3>
            <p className="text-gray-600  mt-2">
              Morbi volutpat nisl a ligula vestibulum placerat. Suspendisse venenatis pulvinar...
            </p>
          </div>
        </div>

        {/* List of Articles */}
        <div className="flex flex-col gap-4">
          {articles.map((article) => (
            <div key={article.id} className="flex items-center bg-gray-100 rounded-lg shadow-md p-4 group">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={100}
                  height={100}
                  className="w-36 h-40 rounded-lg object-cover transition-transform duration-300 hover:scale-125"
                />
              </div>
              <div className="ml-4 flex-1">
                <span className="bg-yellow-500 text-white px-2 py-1 text-xs rounded-full">
                  {article.category}
                </span>
                <h4 className="text-lg hover:text-yellow-500 font-semibold mt-1">{article.title}</h4>
                <div className="text-gray-500 text-sm flex items-center gap-2 mt-1">
                  <span>📅 {article.date}</span>
                  <span>💬 {article.comments}</span>
                  <span>👁️ {article.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;
