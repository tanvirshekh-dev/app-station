

export const updateApps = (app) => {
  const wishList = loadWishList();
//   toast.success("Successfully added this item");

  try {
    const isDuplicate = wishList.some((p) => p.id === app.id);
    if (isDuplicate) return alert("Already added in wishlist");
    const updatedWishList = [...wishList, app];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishList));
  } catch (err) {
    console.log(err);
    return [];
  }
};



