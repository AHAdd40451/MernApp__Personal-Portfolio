/* eslint-disable no-unused-vars */
import React from "react";
import { FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

import { MdCastForEducation } from "react-icons/md";
import('./Loading.css')

const Loading = () => {

  return (
    <div class="mainConatinerLoader" id="mainConatinerLoader">
      <div id="mainLoader">
        <div id="cooking">
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div id="area">
            <div id="sides">
              <div id="pan"></div>
              <div id="handle"></div>
            </div>
            <div id="pancake">
              <div id="pastry"></div>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default Loading;
