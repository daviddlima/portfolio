import React from "react"

const Title = () => {

    return (
        <>
            <div class="row"></div>
            <div class="row">
                <div class="two wide column"></div>
                    <div class="twelve wide column center aligned">
                        <h1>David D'lima</h1>
                    </div>
                <div class="two wide column"></div>
            </div>
            <div class="row">
                <div class="two wide column"></div>
                    <div class="four wide column center aligned">
                        <p>Linkedin</p>
                    </div>
                    <div class="four wide column center aligned">
                        <p>david.dlima@tuta.io</p>
                    </div>
                    <div class="four wide column center aligned">
                        <p>
                            Last Updated {
                            new Date().toLocaleDateString(
                                "en-US",
                                { year: 'numeric', month: 'long', day: 'numeric'}
                            )
                            }
                        </p>
                    </div>
                <div class="two wide column"></div>
            </div>
        </>
    )
}

export default Title