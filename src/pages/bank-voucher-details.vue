/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<template>
    <section>
                           
<div class="page-header-title-box">
    <div class="row align-items-center">
        <div class="col-lg-12 col-12">
            <div class="title_text">
                <h4 class="page-title mb-0">Bank</h4>
            </div>
        </div>
    </div>

</div>
<div class="main_card">
	<div class="card">
		<div class="sales_voucher_top_card_box">
			<div class="row">
				<div class="col-lg-4 col-12">
					<div class="left_arrow_sold"><a @click="$router.go(-1)" ><i class="fa fa-chevron-left"></i></a></div>
					<div class="company_name padding_left_30 mobile_padding_left_0">

						<h3>State bank of india</h3>
						<div class="company_balance">
							<p>Voucher No: 12</p>
						</div>
					</div>

				</div>
				<div class="col-lg-8 col-12">
					<div class="download_border_div mobile_sales_download_div">
						<button type="button" class="btn download_border_btn">
							<img src="assets/images/1.0/svgs/download-black.svg" class="img-fluid mr-3" />Download
						</button>													
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="main_card">
    <div class="card">
        <div class="row">
            <div class="col-12">
                <div class="main_tabs parties_details_main_tabs new_sales_main_tabs_box">
                    <div class="">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-6">
                            <div class="type_balance text-left date_details_party">
                                <p>19 Sep 2022</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-6">
                            <div class="type_balance text-right date_details_party_right">
                                <p>Contra</p>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div class="items_card_box">
                        <div class="top_item_title_box">
                            <h4>FOR BILLS</h4>
                        </div>
                        <div class="items_table_part mobile_pb_0">
						<div class="custom-table-responsive">
                            <table width="100%">
                                <tr>
                                    <th align="left">State Bank of India</th>
                                    <th style="text-align:right;"><span class="font_sans">₹</span> 15,300.00</th>
                                </tr>
                            </table>
                        </div>
                        </div>
                        <div class="items_table_net_amount">
                            <table width="100%">
                                <tr>
                                    <th align="left">NET AMOUNT</th>
                                    <th style="text-align:right;"><span class="font_sans">₹</span> 15,300.00</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="items_card_box">
                        <div class="top_item_title_box">
                            <h4>PAYMENT DETAILS</h4>
                        </div>
                        <div class="items_table_part">
                            <table width="100%">
                                <tr>
                                    <th align="left">Gopinath Patil Parsik Janata</th>
                                    <th style="text-align:right;"><span class="font_sans">₹</span> 3,500.00</th>
                                </tr>
                                <tr>
                                    <th align="left">Sahakari Bank Ltd</th>
                                </tr>
                                <tr>
                                    <th align="left">Inter Bank Transfer</th>
                                </tr>
                                <tr>
                                    <th align="left">04 Apr 2022</th>
                                </tr>
                            </table>
                        </div>
                        <div class="items_table_gross_total">
                            <table width="100%">
                                <tr>
                                    <th align="left">Cash</th>
                                    <th style="text-align:right;"><span class="font_sans">₹</span> 3,500.00</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </section>
</template>