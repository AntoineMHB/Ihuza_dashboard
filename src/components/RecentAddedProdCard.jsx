import { Card, CardDescription, CardTitle } from "./ui/card";

export const RecentAddedProdCard = () => {
  return (
    <Card className="border-gray-100 bg-white">
      <CardTitle className="font-primary font-bold px-5">
        Recent Added Products
      </CardTitle>
      <div className="h-[1px] bg-gray-200"></div>
      <CardDescription className="px-5 py-1">
        <div className="grid grid-cols-3 gap-5">
          <Card className="border border-gray-300">
            <CardTitle className="px-5">
              <div className="flex gap-30">
                <div className="font-primary font-bold ">MacBook Pro 16"</div>

                <div className="w-[60px] h-[20px] bg-(--secondaryGreen) rounded-lg flex items-center justify-center ">
                  <span className="text-(--primaryGreen) text-extralight">
                    In Stock
                  </span>
                </div>
              </div>
            </CardTitle>
            <CardDescription className="px-5">
              <div className="">
                <div>
                  <span className="text-(--secondaryBlack)">Laptops</span>
                </div>

                <div>
                  <span className="text-(--secondaryBlack)">Dec 10, 2024</span>
                </div>
              </div>
            </CardDescription>
          </Card>

          <Card className="border border-gray-300">
            <CardTitle className="px-5">
              <div className="flex gap-30">
                <div className="font-primary font-bold ">Dell XPS 13</div>

                <div className="w-[60px] h-[20px] bg-(--secondaryGreen) rounded-lg flex items-center justify-center ">
                  <span className="text-(--primaryGreen) text-extralight">
                    In Stock
                  </span>
                </div>
              </div>
            </CardTitle>
            <CardDescription className="px-5">
              <div className="">
                <div>
                  <span className="text-(--secondaryBlack)">Laptops</span>
                </div>

                <div>
                  <span className="text-(--secondaryBlack)">Dec 9, 2024</span>
                </div>
              </div>
            </CardDescription>
          </Card>

          <Card className="border border-gray-300">
            <CardTitle className="px-5">
              <div className="flex gap-25">
                <div className="font-primary font-bold ">iPhone 15 Pro</div>

                <div className="w-[100px] h-[20px] bg-(--secondaryBrown) rounded-lg flex items-center justify-center ">
                  <span className="text-(--primaryBrown) text-extralight">
                    Low Stock
                  </span>
                </div>
              </div>
            </CardTitle>
            <CardDescription className="px-5">
              <div className="">
                <div>
                  <span className="text-(--secondaryBlack)">Mobile</span>
                </div>

                <div>
                  <span className="text-(--secondaryBlack)">Dec 8, 2024</span>
                </div>
              </div>
            </CardDescription>
          </Card>

          <Card className="border border-gray-300">
            <CardTitle className="px-5">
              <div className="flex gap-30">
                <div className="font-primary font-bold ">iPad Air</div>

                <div className="w-[60px] h-[20px] bg-(--secondaryGreen) rounded-lg flex items-center justify-center ">
                  <span className="text-(--primaryGreen) text-extralight">
                    In Stock
                  </span>
                </div>
              </div>
            </CardTitle>
            <CardDescription className="px-5">
              <div className="">
                <div>
                  <span className="text-(--secondaryBlack)">Tablets</span>
                </div>

                <div>
                  <span className="text-(--secondaryBlack)">Dec 7, 2024</span>
                </div>
              </div>
            </CardDescription>
          </Card>

          <Card className="border border-gray-300">
            <CardTitle className="px-5">
              <div className="flex gap-25">
                <div className="font-primary font-bold ">Surface Pro 9</div>

                <div className="w-[100px] h-[20px] bg-(--secondaryGreen) rounded-lg flex items-center justify-center">
                  <span className="text-(--primaryGreen) text-extralight">
                    Out of Stock
                  </span>
                </div>
              </div>
            </CardTitle>
            <CardDescription className="px-5">
              <div className="">
                <div>
                  <span className="text-(--secondaryBlack)">Tablets</span>
                </div>

                <div>
                  <span className="text-(--secondaryBlack)">Dec 6, 2024</span>
                </div>
              </div>
            </CardDescription>
          </Card>
        </div>
      </CardDescription>
    </Card>
  );
};
