import React, { useEffect, useState } from "react";
import Data from "../../shared/Data";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  const [category, setCategory] = useState();

  useEffect(() => {
    setCategory(Data.CategoryListData);
  }, []);

  return (
    <div>
      <h2 className="text-[20px] font-semibold my-3 ">
        Select your favourite category
      </h2>

      {category ? (
        <div className="flex gap-6 mb-5">
          {category.map((item) => (
            <div key={item.id}>
              <CategoryItem category={item} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default CategoryList;
