import React from "react"
import linkedin from "../images/linkedin.svg"
import envelope from "../images/envelope.svg"
import github from "../images/github.svg"

const Title = () => {

    return (
        <>
            <div class="row"></div>
            <div class="row">
                <div class="two wide column"></div>
                    <div class="twelve wide column left aligned">
                        <h1 class="ui header">David D'lima</h1>
                        <p>M.S Computer Science | B.S Chemical Engineering | Passionate about building things through data</p>
                        <hr />
                    </div>
                <div class="two wide column"></div>
            </div>
            <div class="row">
                <div class="two wide column"></div>
                    <div class="two wide column left aligned">
                        <a href="https://www.linkedin.com/in/davidrdlima/">
                            <img src={linkedin} height="25rem" width="25rem" alt="cogwheel" />
                        </a>
                    </div>
                    <div class="two wide column left aligned">
                        <a href="https://github.com/daviddlima">
                            <img src={github} height="25rem" width="25rem" alt="cogwheel" />
                        </a>
                    </div>
                    <div class="one wide column center aligned">
                        <a href="mailto:me@daviddlima.com">
                            <img src={envelope} height="25rem" width="25rem" alt="cogwheel" />
                        </a>
                    </div>
                    <div class="seven wide column left aligned">
                        <p>me@daviddlima.com</p>
                    </div>
                <div class="two wide column"></div>
            </div>
            <div class="row">
                <div class="two wide column"></div>
                    <div class="twelve wide column left aligned">
                        <p>
                            Last Updated May 7, 2020
                        </p>
                    </div>
                <div class="two wide column"></div>
            </div>
        </>
    )
}

export default Title
