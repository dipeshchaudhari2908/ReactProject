import React from 'react'
import {} from "./Heading"
import { Link } from 'gatsby'
import Heading from "../Reuseable/Heading"

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ipsa dolor nam aspernatur pariatur! Id recusandae nulla reprehenderit odio, at fuga et necessitatibus. Nisi, nemo corporis quas deleniti alias eos illo iusto voluptatem optio, molestiae culpa modi accusamus saepe aut repellendus. Eum dicta repudiandae ea ducimus nemo numquam quisquam tempore, officiis reprehenderit in voluptas error optio distinctio molestiae quaerat! Officiis.
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
