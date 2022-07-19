import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function Tarjeta() {
   
           
    
    return (
        <div id="tarjeta">
        <Form action="#" class="credit-card-div">
            <div class="panel panel-default" >
                <div class="panel-heading">
                    <div class="row ">
                        <div class="col-md-12">
                            <Form.Control type="text" class="form-control" placeholder="Enter Card Number" />
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-md-3 col-sm-3 col-xs-3">
                            <span class="help-block text-muted small-font" > Expiry Month</span>
                            <Form.Control type="text" class="form-control" placeholder="MM" />
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                            <span class="help-block text-muted small-font" >  Expiry Year</span>
                            <Form.Control type="text" class="form-control" placeholder="YY" />
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                            <span class="help-block text-muted small-font" >  CCV</span>
                            <Form.Control type="text" class="form-control" placeholder="CCV" />
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                            {/* <img src={TarjetaC} class="img-rounded" /> */}
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-md-12 pad-adjust">
                            <Form.Control type="text" class="form-control" placeholder="Name On The Card" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 pad-adjust">
                            <div class="checkbox">
                                <label>
                                    Save details for fast payments <a href="https://thumbs.gfycat.com/InconsequentialMelodicGuanaco-size_restricted.gif"> learn how ?</a>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        
                        <div class="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                            
                        </div>
                    </div>
                </div>
            </div>
        </Form>
        </div>
    );
}
export default Tarjeta;