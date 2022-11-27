/*
<h3>Productos</h3>
                            {productsFilter.map((e) => {
                                return (
                                    <div className='col-12 col-sm-6 col-lg-4 mb-3' key={e.title}>

                                        <div className='card ' >
                                            <div className='img-h' onClick={() => { showDetails(e.id) }}>
                                                <img className='card-img-top p-4 pb-0 img-prod pri' src={e.productImgs?.[0]} alt="" />
                                                <img className='card-img-top p-4 pb-0 img-prod sec' src={e.productImgs?.[1]} alt="" />
                                            </div>
                                            <hr />
                                            <div className="card-body pt-0 pb-5">
                                                <h6 className="card-title ">{e.title}</h6>

                                                <div className='detail-prod'>
                                                    <span className=''>Price: </span>
                                                    <span>{e.price}</span>



                                                </div>
                                                <button className='p-2 border-0 fs-4 buton-cart' onClick={() => {
                                                    addCart({ id: e.id, quantity: 1 })
                                                }}>
                                                    <i className="fa-solid fa-cart-plus"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })} */




/*           <div className='container'>
                <div className='row'>
                    <div className='col-12 d-none d-lg-block col-lg-3 mt-5'>
                        <div className='aside sticky-top pt-5 ps-0 pe-4'>
                            <h5 className='pt-5'>Price</h5>
                            <hr />
                            <form action="" className='mb-5' onSubmit={handleSubmit(filterByPrice)}>
                                <label htmlFor="from" className='d-flex justify-content-between mb-2'>
                                    <span>From</span>
                                    <input className='input-c' type="number" id='from' {...register("from")} />

                                </label>
                                <label htmlFor="to" className='d-flex justify-content-between'>
                                    <span>To</span>
                                    <input className='input-c' type="number" id='to' {...register("to")} />

                                </label>
                                <div className='d-flex justify-content-end'>
                                    <button className='buton-filter ps-2 pe-2 mt-3 border-0 pt-1 pb-1 '>Filter Price</button>
                                </div>
                            </form>
                            <h5>Category</h5>
                            <hr />

                            <button className='buton-filter ps-2 pe-2 mt-3 border-0 pt-1 pb-1' onClick={() => { filterByCategory(0) }}>Smart TV</button><br />
                            <button className='buton-filter ps-2 pe-2 mt-3 border-0 pt-1 pb-1' onClick={() => { filterByCategory(2) }}>Smartphone</button><br />
                            <button className='buton-filter ps-2 pe-2 mt-3 border-0 pt-1 pb-1' onClick={() => { filterByCategory(1) }}>Computer</button><br />



                        </div>
                    </div>

                    <div className='col-12 col-lg-9'>
                        <div className='row'>
                            <div className='col'>
                                <form className='d-flex justify-content-center mt-5 mb-3 ps-2 pe-2 ps-lg-5 pe-lg-5'>
                                    <label htmlFor="search"></label>
                                    <input className='w-100 border border-secondary input-search' type="text" placeholder='Search by type' id='search' value={searchText} onChange={(e) => { filter(e.target.value) }} />
                                    <button className='buton-search ps-4 pe-4 rounded-end'>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </form>

                            </div>



                        </div>

                        <div className='row pt-4'>


                            

                        </div>

                    </div>
                </div>

            </div> */