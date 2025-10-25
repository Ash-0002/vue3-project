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
                <h4 class="page-title mb-0">Sales Order</h4>
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

						<h3>Abhijit Mart Khanapur</h3>
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
                                <p>Sales</p>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div class="items_card_box">
                        <div class="top_item_title_box">
                            <h4>ITEMS</h4>
                        </div>
                        <div class="items_table_part mobile_pb_0">
						<div class="custom-table-responsive">
                            <table width="100%">
                                <tr>
                                    <th align="left">Amazing Pasta Masala 7 Rs (15)</th>
                                    <th style="text-align:right;"><span class="font_sans">₹</span> 15,300.00</th>
                                </tr>
                                <tr>
                                    <td colspan="2">Qty: 60 Pcs</td>
                                </tr>
                                <tr>
                                    <td colspan="2">Rate: <span class="font_sans">₹</span> 255.00 / Pcs</td>
                                </tr>
                                <tr>
                                    <td colspan="2">Gr.Rate: <span class="font_sans">₹</span> 267.75 / Pcs</td>
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
                            <h4>SUMMARY</h4>
                        </div>
                        <div class="items_table_part">
                            <table width="100%">
                                <tr>
                                    <th align="left">CGST</th>
                                    <th style="text-align:right;"><span class="font_sans">₹</span> 382.50</th>
                                </tr>
                                <tr>
                                    <th align="left">SGST</th>
                                    <th style="text-align:right;"><span class="font_sans">₹</span> 382.50</th>
                                </tr>
                            </table>
                        </div>
                        <div class="items_table_gross_total">
                            <table width="100%">
                                <tr>
                                    <th align="left">GROSS TOTAL</th>
                                    <th style="text-align:right;"><span class="font_sans">₹</span> 16,065.00</th>
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