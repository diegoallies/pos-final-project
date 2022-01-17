let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        title: "GTR Skyline",
        category: "GTR",
        price: 975757.99,
        img: "https://i.pinimg.com/564x/e3/ea/cd/e3eacd9e3878ea96db8b104512ebe02b.jpg",
      },
      {
        title: "GTR Nismo",
        category: "GTR",
        price: 908880.90,
        img: "https://cdn.motor1.com/images/mgl/8LAjo/s1/2020-nissan-gt-r-nismo.jpg",
      },
      {
        title: "GTR 50 Final Edition",
        category: "GTR",
        price: 196272888.00,
        img: "https://cdn.motor1.com/images/mgl/1xNqw/s1/2020-nissan-gt-r50-by-italdesign-first-production-car.jpg",
      },
      {
        title: "GTR T-Spek",
        category: "GTR",
        price: 5000000.50,
        img: "https://www.topgear.com/sites/default/files/2021/09/210914-01_002-source.jpg?w=892&h=502",
      },
      {
        title: "GTR Modified",
        category: "GTR",
        price: 500000000.00,
        img: "https://wallpapercave.com/wp/wp8537838.jpg",
      },
      {
        title: "GTR - 2020",
        category: "GTR",
        price: 2000000.96,
        img: "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/gt-r/r35/2_minor_change/overview/19TDIEULHD_GT-R_002.jpg.ximg.l_full_m.smart.jpg",
      },
      {
        title: "Honda Civic",
        category: "Honda",
        price: 3000000.96,
        img: "https://www.topgear.com/sites/default/files/cars-car/carousel/2020/09/308395_2020_civic_type_r_mmc_launch_2.jpg?w=892&h=502",
      },
      {
        title: "Honda civic type R",
        category: "Honda",
        price: 8700000.96,
        img: "https://cdn.honda.co.za/pub/general/civic-type-r/thumbnail/_240x202_crop_center-center_10_none/TypeR_Gallery_Thumb1.jpg",
      },
      {
        title: "Honda CRV",
        category: "Honda",
        price: 5600000.96,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/2018_Honda_CR-V_%28RW_MY18%29_%2BSport_2WD_wagon_%282018-10-22%29_01.jpg/280px-2018_Honda_CR-V_%28RW_MY18%29_%2BSport_2WD_wagon_%282018-10-22%29_01.jpg",
      },
      {
        title: "Bugatti divo",
        category: "Bugatti",
        price: 200000000.96,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bugatti_Divo%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0029%29.jpg/280px-Bugatti_Divo%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0029%29.jpg",
      },
      {
        title: "Bugatti vw model",
        category: "Bugatti",
        price: 10200000.96,
        img: "https://cdn.motor1.com/images/mgl/6MGkl/s1/bugatti-chiron-pur-sport.webp",
      },
      {
        title: "Bugatti Chiron",
        category: "Bugatti",
        price: 209800000.96,
        img: "https://gtspirit.com/wp-content/uploads/2021/06/02_hispeed_css-e1624431465349.jpg",
      },
    ];

let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// READ
function readProducts(products) {
  document.querySelector("#products").innerHTML = "";
  products.forEach((product, position) => {
    document.querySelector("#products").innerHTML += `
      <div class="card">
        <img src="${product.img}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="cardhead">${product.title}</h5>
          <p class="card-text">R${product.price}</p>
          <div class="d-flex mb-3">
            <input type="number" class="form-control" value=1 min=1 id="addToCart${position}">
            <button type="button" class="btn btn-secondary ms-3" onclick="addToCart(${position})"><i class="fas fa-cart-plus"></i></button>
          </div>
          
          
          
          </div>
          <div class="d-flex justify-content-end card-footer">
            <button type="button" class="btn btn-primary w-50" data-bs-toggle="modal" data-bs-target="#editProduct${position}" >
              Edit
            </button>
            <button type="button" class="btn btn-danger w-50 ms-3" onclick="deleteProduct(${position})" >
              Delete
            </button>
          </div>
      </div>
      <div
                class="modal fade"
                id="editProduct${position}"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Edit ${product.title}
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="editTitle${position}" class="form-label">Title</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editTitle${position}"
                          id="editTitle${position}"
                          value="${product.title}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editCategory${position}" class="form-label">Category</label>
                        <select
                          class="form-select"
                          name="editCategory${position}"
                          id="editCategory${position}"
                        >
                          <option value="GTR">GTR</option>
                          <option value="Honda">Honda</option>
                          <option value="Bugatti">Bugatti</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="editPrice${position}" class="form-label">Price</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editPrice${position}"
                          id="editPrice${position}"
                          value="${product.price}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editImg${position}" class="form-label">Image URL</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editImg${position}"
                          id="editImg${position}"
                          value="${product.img}"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        onclick="updateProduct(${position})"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
    `;
  });
}

readProducts(products);
showCartBadge();

// CREATE
function createProduct() {
  let title = document.querySelector("#addTitle").value;
  let category = document.querySelector("#addCategory").value;
  let price = document.querySelector("#addPrice").value;
  let img = document.querySelector("#addImg").value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products.push({
      title,
      category,
      price,
      img,
    });
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// UPDATE
function updateProduct(position) {
  let title = document.querySelector(`#editTitle${position}`).value;
  let category = document.querySelector(`#editCategory${position}`).value;
  let price = document.querySelector(`#editPrice${position}`).value;
  let img = document.querySelector(`#editImg${position}`).value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products[position] = {
      title,
      category,
      price,
      img,
    };
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// DELETE
function deleteProduct(position) {
  let confirmation = confirm(
    "Are you sure you want to delete the selected product?"
  );

  if (confirmation) {
    products.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  }
}

// ADD TO CART
function addToCart(position) {
  let qty = document.querySelector(`#addToCart${position}`).value;
  let added = false;
  cart.forEach((product) => {
    if (product.title == products[position].title) {
      alert(
        `You have successfully added ${qty} ${products[position].title} to the cart`
      );
      product.qty = parseInt(product.qty) + parseInt(qty);
      added = true;
    }
  });
  if (!added) {
    cart.push({ ...products[position], qty });
    alert(
      `You have successfully added ${qty} ${products[position].title} to the cart`
    );
  }

  showCartBadge();

  localStorage.setItem("cart", JSON.stringify(cart));
}

// Update Cart Badge
function showCartBadge() {
  document.querySelector("#badge").innerHTML = cart ? cart.length : "";
}

// SORT BY CATEGORY
function sortCategory() {
  let category = document.querySelector("#sortCategory").value;

  if (category == "All") {
    return readProducts(products);
  }

  let foundProducts = products.filter((product) => {
    return product.category == category;
  });

  readProducts(foundProducts);
  console.log(foundProducts);
}

// SORT BY NAME

function sortName() {
  let direction = document.querySelector("#sortName").value;

  let sortedProducts = products.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "descending") sortedProducts.reverse();
  console.log(sortedProducts);
  readProducts(products);
}

// SORT BY PRICE

function sortPrice() {
  let direction = document.querySelector("#sortPrice").value;

  let sortedProducts = products.sort((a, b) => a.price - b.price);

  console.log(sortedProducts);

  if (direction == "descending") sortedProducts.reverse();
  readProducts(sortedProducts);
}