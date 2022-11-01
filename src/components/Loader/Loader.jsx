import React, { useState } from 'react'
import("./loader.css")

const Loader = () => {
    // const [loading, setLoading] = useState(true)
    // const spinner = document.getElementById("cooking");
    // if (loading) {
    //     setTimeout(() => {
    //         spinner.style.display = "none"
    //         setLoading(false)
    //     }, 2000);
    // }
    return (
        <div>

            <h1>Cooking in progress..</h1>
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
    )
}

export default Loader