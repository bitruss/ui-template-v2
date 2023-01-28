import axios from "axios";
import config from "@/config";
import MockAdapter from "axios-mock-adapter";

////////////////////////////////////////////
//let mock be global which also used for other project
let mock = new MockAdapter(axios);

if (config.plugins.mock.enable) {

    mock.onPost("/api/user/login").reply((config) => {
      return new Promise(function (resolve) {
        setTimeout(function () {
          const data = JSON.parse(config.data);
          if (data.email == "admin@test.com") {
            resolve([
              200,
              {
                meta_status: 1, // correct status
                meta_msg: "",
                token: "this_is_the_mocked_web_token",
              },
            ]);
          } else {
            resolve([
              200,
              {
                meta_status: -1, //error status
                meta_msg: "error mocked",
                token:"",
              },
            ]);
          }
        }, 3000); //5 seconds delay
      });
    });
  }


  ////////////////////

if (config.plugins.mock.enable) {
    mock.onPost("/api/user/register").reply((config) => {
      return new Promise(function (resolve) {
        setTimeout(function () {
          const data = JSON.parse(config.data);
          if (Math.random()<0.5) {
            resolve([
              200,
              {
                meta_status: 1, // correct status
                meta_msg: "",
                token: "this_is_the_mocked_web_token",
              },
            ]);
          } else {
            resolve([
              200,
              {
                meta_status: -1, //error status
                meta_msg: "Random error mocked",
                token: "",
              },
            ]);
          }
        }, 5000); //5 seconds delay
      });
    });
  }
  
  //////////////

if (config.plugins.mock.enable) {
    mock.onPost("/api/user/reset_pass").reply((config) => {
      return new Promise(function (resolve) {
        setTimeout(function () {
          const data = JSON.parse(config.data);
          if ( Math.random()<0.5) {
            resolve([
              200,
              {
                meta_status: 1, // correct status
                meta_msg: "",
              },
            ]);
          } else {
            resolve([
              200,
              {
                meta_status: -1, //error status
                meta_msg: "Random error mocked",
              },
            ]);
          }
        }, 5000); //5 seconds delay
      });
    });
  }


  //////////////

if (config.plugins.mock.enable) {
    mock.onPost("/api/user/detail").reply((config) => {
      return new Promise(function (resolve) {
        setTimeout(function () {
          const data = JSON.parse(config.data);
          if ( Math.random()<0.5) {
            resolve([
              200,
              {
                meta_status: 1, // correct status
                meta_msg: "",
                user:{
                    email:"admin@test.com",
                    token:"this_is_the_mocked_web_token",
                    roles:["user","admin"],
                    permissions:[],
                }
              },
            ]);
          } else {
            resolve([
              200,
              {
                meta_status: -1, //error status
                meta_msg: "Random error mocked",
                user:null,
              },
            ]);
          }
        }, 5000); //5 seconds delay
      });
    });
  }

  export default {}