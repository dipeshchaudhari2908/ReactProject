import React from 'react'
import Heading from '../Reuseable/Heading'
import {Link} from 'gatsby'

export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis vel inventore aliquid delectus neque minus quas necessitatibus omnis a? Nihil est suscipit quas eum dignissimos, saepe deserunt rem mollitia ea sequi et culpa laborum fuga expedita nemo quae, explicabo, veniam ratione. Ex, iusto! Magnam repudiandae id nemo adipisci vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium adipisci similique consequuntur possimus perspiciatis harum eaque odio numquam quod, molestiae aspernatur repellendus. Ut quisquam dolorem aspernatur pariatur ratione animi, at, totam eius sed distinctio recusandae provident quis iste et dignissimos odio. Ad architecto delectus inventore minus cum ea libero esse veritatis iste totam natus, laboriosam qui porro maiores doloremque sit enim alias non eum vitae necessitatibus quaerat nesciunt error. Quaerat adipisci minus placeat assumenda, cumque maxime voluptas recusandae dolorum magnam! Molestiae voluptatem, est libero natus quo ea voluptas magnam culpa exercitationem asperiores dolores odio ut laborum alias! Nobis, impedit qui.
                        </p>
                    </div>
                    <div className="col-4">

                    <div class="card">
                        <img src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="image goes here"/>
                        <div class="card-body">
                            <h5 class="card-title">Just Click photos</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary btn-block">Go somewhere</a>
                        </div>
                    </div>






                    </div>
                </div>
            </div>
            
        </section>
    )
}
