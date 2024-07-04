// singleton

// object literals

// object.create

const jsUser = {
  name: "Koushik",
  surname: "Chowdhury",
  age: 21,
  email: "koushika@koushik.com",
  isLoggedIn: false,
  location: {
    dist: "Malda",
    village: "Nageswarpur",
  },
};

const print = `${"dist"}`;
console.log(jsUser.location[print]);

const update = jsUser[`${"email"}`]

jsUser.update = "csakoushik"
console.log(jsUser["update"])