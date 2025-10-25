<template>
  <footer class="footer">
    <!-- <div class="container">
      <div class="row align-items-center flex-row-reverse">
        <div class="col-md-12 col-sm-12 text-center">
          Copyright © 2022 <a href="javascript:void(0);">Livekeeping Technologies Pvt. Ltd.</a>
        </div>
      </div>
    </div> -->

    <div class="modal-vue">
      <div v-if="this.source !== 'sf'">

        <button class="header_plus_icon" v-on:click="(showTransaction = !showTransaction)" v-show="showPlusIcon"
          v-if="shouldShowButton">
          <img src="/assets/images/1.0/png/white-add.png" alt="img" class="header-icon" />
          <!-- <p><img src="/assets/images/1.0/svgs/plus-circle.svg" alt="img" class="header-icon me-2" /> Create Transaction</p> -->
        </button>
      </div>
      <div class="header_icon_menu" v-if="showTransaction">
        <button class="close" @click="showTransaction = false">x</button>
        <ul class="transaction_menu" @click="showTransaction = false">
          <li class="main_heading_transaction p-1" v-show="showSalesLabel">
            Sales
          </li>
          <a href="javascript:void(0);" @click="Footer_Sales()">
            <div v-if="isPaid == '' || isPaid == null">
              <a href="javascript:void(0);" class="ml-2">
                <li v-b-modal.customerstatus-popup class="anchor_custom">
                  <img src="/assets/images/1.0/icons/sales.png" alt="img" class="footer-icon" />
                  <span class="mx-1">Sales Invoice</span>
                  <img class="create_crown_image" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
                </li>
              </a>
            </div>
            <div v-else>
              <div v-if="this.isWrite_isSales == true">
                <!-- <a
                  href="javascript:void(0);"
                  @click="Add_new('Sales')"
                  class="ml-2"
                  ><li v-b-modal.link_popup class="anchor_custom"> -->
                <!-- <i class="fa fa-chevron-right"></i> -->
                <!-- <img src="/assets/images/1.0/icons/sales.png" alt="img" class="footer-icon" />
                
                <span class="mx-1">Sales Invoice</span> 
              </li></a> -->
                <router-link :to="{ name: 'sales-voucher-v4' }" class="ml-2">
                  <li class="anchor_custom">
                    <img src="/assets/images/1.0/icons/sales.png" alt="img" class="footer-icon" />
                    <span class="mx-1">Sales Invoice</span>
                  </li>
                </router-link>
              </div>
              <div v-else-if="this.isWrite_isSales == false">
                <div></div>
              </div>
              <!-- <div v-else>
              <li v-b-modal.link_popup>
                <img src="/assets/images/1.0/icons/sales.png" alt="img" class="footer-icon" />
                <a
                  href="javascript:void(0);"
                  @click="Add_new('Sales')"
                  class="ml-2"
                  >Sales Invoice
                </a>
              </li>
            </div> -->
            </div>
          </a>
          <a href="javascript:void(0);" @click="Footer_Salesorder()">
            <div v-if="isPaid == '' || isPaid == null">
              <a href="javascript:void(0);" @click="Add_new('Sales Order')" class="ml-2">
                <li v-b-modal.customerstatus-popup class="anchor_custom">
                  <img src="/assets/images/1.0/icons/sales-order.png" alt="img" class="footer-icon" />
                  <span class="mx-1">Sales Order</span>
                  <img class="create_crown_image" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
                </li>
              </a>
            </div>
            <div v-else>
              <div v-if="this.isWrite_isSalesOrder == true">
                <!-- <a href="javascript:void(0);" @click="Add_new('Sales Order')" class="ml-2">
                  <li v-b-modal.link_popup class="anchor_custom">
                    <img src="/assets/images/1.0/icons/sales-order.png" alt="img" class="footer-icon" />

                    <span class="mx-1">Sales Order</span>
                  </li>
                </a> -->
                <router-link :to="{ name: 'sales-order-voucher-V4' }" class="ml-2">
                  <li class="anchor_custom">
                    <img src="/assets/images/1.0/icons/sales-order.png" alt="img" class="footer-icon" />
                    <span class="mx-1">Sales Order</span>
                  </li>
                </router-link>
              </div>
              <!-- <div v-else-if="this.isWrite_isSalesOrder == false">
              <div></div>
            </div> -->
              <!-- <div v-else>
              <li v-b-modal.link_popup>
                <img
                  src="/assets/images/1.0/icons/sales-order.png"
                  alt="img"
                  class="footer-icon"
                />
                <a
                  href="javascript:void(0);"
                  @click="Add_new('Sales Order')"
                  class="ml-2"
                  >Sales Order
                </a>
              </li>
            </div> -->
            </div>
          </a>
          <a href="javascript:void(0);" @click="Footer_Creditnote()">
            <div v-if="isPaid == '' || isPaid == null">
              <a href="javascript:void(0);" class="ml-2">
                <li v-b-modal.customerstatus-popup class="anchor_custom">
                  <img src="/assets/images/1.0/icons/creditNote.png" alt="img" class="footer-icon" />
                  <span class="mx-1">Credit Note</span>
                  <img class="create_crown_image" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
                </li>
              </a>
            </div>
            <div v-else>
              <div v-if="this.isWrite_isCreditNote == true">
                <!-- <a href="javascript:void(0);" @click="Add_new('Credit Note')" class="ml-2">
                  <li v-b-modal.link_popup class="anchor_custom">
                    <img src="/assets/images/1.0/icons/creditNote.png" alt="img" class="footer-icon" />
                    <span class="mx-1">Credit Note</span>

                  </li>
                </a> -->
                <router-link :to="{ name: 'create-creditnote' }" class="ml-2">
                  <li class="anchor_custom">
                    <img src="/assets/images/1.0/icons/creditNote.png" alt="img" class="footer-icon" />
                    <span class="mx-1">Credit Note</span>
                  </li>
                </router-link>
              </div>
              <div v-else-if="this.isWrite_isCreditNote == false">
                <div></div>
              </div>
              <!-- <div v-else>
              <li v-b-modal.link_popup>
                <img
                  src="/assets/images/1.0/icons/sales-order.png"
                  alt="img"
                  class="footer-icon"
                />
                <a
                  href="javascript:void(0);"
                  @click="Add_new('Sales Order')"
                  class="ml-2"
                  >Sales Order
                </a>
              </li>
            </div> -->
            </div>
          </a>
          <a href="javascript:void(0);" @click="Footer_Quotation()">
            <div v-if="this.isWrite_isQuotation == false">
              <div></div>
            </div>
            <div v-else>
              <router-link :to="{ name: 'create-quotation-v4' }" class="ml-2">
                <li class="anchor_custom">
                  <img src="/assets/images/1.0/icons/my-quotation.png" alt="img" class="footer-icon" />
                  <span class="mx-1">Quotation</span>
                </li>
              </router-link>
            </div>
          </a>
          <a href="javascript:void(0);" @click="Footer_Receipt()">
            <div v-if="isPaid == '' || isPaid == null">
              <a href="javascript:void(0);" class="ml-2">
                <li v-b-modal.customerstatus-popup class="anchor_custom">
                  <img src="/assets/images/1.0/icons/receipt.png" alt="img" class="footer-icon" />

                  <span class="mx-1">Receipt</span>
                  <img class="create_crown_image" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
                </li>
              </a>
            </div>
            <div v-else>
              <div v-if="this.isWrite_isReceipt == true">
                <!-- <a href="javascript:void(0);" @click="Add_new('Receipt')" class="ml-2">
                  <li v-b-modal.link_popup class="anchor_custom">
                    <img src="/assets/images/1.0/icons/receipt.png" alt="img" class="footer-icon" />
                    <span class="mx-1">Receipt</span>
                  </li>
                </a> -->
                <router-link :to="{ name: 'create-receipt' }" class="ml-2">
                  <li class="anchor_custom">
                    <img src="/assets/images/1.0/icons/receipt.png" alt="img" class="footer-icon" />
                    <span class="mx-1">Receipt</span>
                  </li>
                </router-link>
              </div>
              <div v-else-if="this.isWrite_isReceipt == false">
                <div></div>
              </div>
              <!-- <div v-else>
              <li v-b-modal.link_popup>
              <img src="/assets/images/1.0/icons/receipt.png" alt="img" class="footer-icon" />
              <a
                href="javascript:void(0);"
                @click="Add_new('Receipt')"
                class="ml-2"
                >Receipt</a
              >
            </li>
            </div> -->
            </div>
          </a>
          <!-- <li v-b-modal.link_popup @click="showTransaction = false">
            <img src="/assets/images/1.0/icons/my-quotation.png" alt="img" class="footer-icon" />
            <router-link :to="{ name: 'create-quotation' }" class="ml-2">Quotation</router-link>
          </li>
          <li v-b-modal.link_popup>
            <img src="/assets/images/1.0/icons/receipt.png" alt="img" class="footer-icon" />
            <a href="javascript:void(0);" @click="Add_new('Receipt')" class="ml-2">Receipt</a>
          </li>
          <li v-b-modal.link_popup>
            <img src="/assets/images/1.0/icons/sales-order.png" alt="img" class="footer-icon" />
            <a href="javascript:void(0);" @click="Add_new('Sales Order')" class="ml-2">Sales Order</a>
          </li>
          <li v-b-modal.link_popup>
            <img src="/assets/images/1.0/icons/creditNote.png" alt="img" class="footer-icon" />
            <a href="javascript:void(0);" @click="Add_new('Credit Note')" class="ml-2">Credit Note</a>
          </li> -->
        </ul>
        <ul class="transaction_menu" @click="showTransaction = false">
          <li class="main_heading_transaction p-1" v-show="showPurchaseLabel">
            Purchase
          </li>
          <a href="javascript:void(0);" @click="Footer_Purchase()">
            <div v-if="isPaid == '' || isPaid == null">
              <a href="javascript:void(0);" class="ml-2">
                <li v-b-modal.customerstatus-popup class="anchor_custom">
                  <img src="/assets/images/1.0/icons/purchase.png" alt="img" class="footer-icon" />
                  <span class="mx-1">Purchase Invoice</span>
                  <img class="create_crown_image" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
                </li>
              </a>
            </div>
            <div v-else>
              <div v-if="this.isWrite_isPurchase == true">
                <!-- <a href="javascript:void(0);" @click="Add_new('Purchase')" class="ml-2">
                  <li v-b-modal.link_popup class="anchor_custom">
                    <img src="/assets/images/1.0/icons/purchase.png" alt="img" class="footer-icon" />

                    <span class="mx-1">Purchase Invoice</span>
                  </li>
                </a> -->
                <router-link :to="{ name: 'purchase-voucher-v4' }" class="ml-2">
                  <li class="anchor_custom">
                    <img src="/assets/images/1.0/icons/purchase.png" alt="img" class="footer-icon" />
                    <span class="mx-1">Purchase Invoice</span>
                  </li>
                </router-link>
              </div>
              <div v-else-if="this.isWrite_isPurchase == false">
                <div></div>
              </div>
              <!-- <div v-else>
              <li v-b-modal.link_popup>
                <img
                  src="/assets/images/1.0/icons/purchase.png"
                  alt="img"
                  class="footer-icon"
                />
                <a
                  href="javascript:void(0);"
                  @click="Add_new('Purchase')"
                  class="ml-2"
                  >Purchase Invoice
                </a>
              </li>
            </div> -->
            </div>
          </a>
          <a href="javascript:void(0);" @click="Footer_Purchaseorder()">
            <div v-if="isPaid == '' || isPaid == null">
              <a href="javascript:void(0);" class="ml-2">
                <li v-b-modal.customerstatus-popup class="anchor_custom">
                  <img src="/assets/images/1.0/icons/purchase-order.png" alt="img" class="footer-icon" />
                  <span class="mx-1">Purchase Order</span>
                  <img class="create_crown_image" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
                </li>
              </a>
            </div>
            <div v-else>
              <div v-if="this.isWrite_isPurchaseOrder == true">
                <!-- <a href="javascript:void(0);" @click="Add_new('Purchase Order')" class="ml-2">
                  <li v-b-modal.link_popup class="anchor_custom">
                    <img src="/assets/images/1.0/icons/purchase-order.png" alt="img" class="footer-icon" />

                    <span class="mx-1">Purchase Order</span>
                  </li>
                </a> -->
                <router-link :to="{ name: 'purchase-order-voucher-v4' }" class="ml-2">
                  <li class="anchor_custom">
                    <img src="/assets/images/1.0/icons/purchase-order.png" alt="img" class="footer-icon" />
                    <span class="mx-1">Purchase Order</span>
                  </li>
                </router-link>
              </div>
              <div v-else-if="this.isWrite_isPurchaseOrder == false">
                <div></div>
              </div>

            </div>
          </a>
          <a href="javascript:void(0);" @click="Footer_Debitnote()">
            <div v-if="isPaid == '' || isPaid == null">
              <a href="javascript:void(0);" class="ml-2">
                <li v-b-modal.customerstatus-popup class="anchor_custom">
                  <img src="/assets/images/1.0/icons/debitNote.png" alt="img" class="footer-icon" />
                  <span class="mx-1">Debit Note</span>
                  <img class="create_crown_image" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
                </li>
              </a>
            </div>
            <div v-else>
              <div v-if="this.isWrite_isDebitNote == true">
                <!-- <a href="javascript:void(0);" @click="Add_new('Debit Note')" class="ml-2">
                  <li v-b-modal.link_popup class="anchor_custom">
                    <img src="/assets/images/1.0/icons/debitNote.png" alt="img" class="footer-icon" />

                    <span class="mx-1">Debit Note</span>
                  </li>
                </a> -->
                <router-link :to="{ name: 'create-debit-note-v4' }" class="ml-2">
                  <li class="anchor_custom">
                    <img src="/assets/images/1.0/icons/debitNote.png" alt="img" class="footer-icon" />
                    <span class="mx-1">Debit Note</span>
                  </li>
                </router-link>
              </div>
              <div v-else-if="this.isWrite_isDebitNote == false">
                <div></div>
              </div>

            </div>
          </a>
          <a href="javascript:void(0);" @click="Footer_Payment()">
            <div v-if="isPaid == '' || isPaid == null">
              <a href="javascript:void(0);" class="ml-2">
                <li v-b-modal.customerstatus-popup class="anchor_custom">
                  <img src="/assets/images/1.0/icons/payment.png" alt="img" class="footer-icon" />
                  <span class="mx-1">Payment</span>
                  <img class="create_crown_image" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
                </li>
              </a>
            </div>
            <div v-else>
              <div v-if="this.isWrite_isPayment == true">
                <!-- <a href="javascript:void(0);" @click="Add_new('Payment')" class="ml-2">
                  <li v-b-modal.link_popup class="anchor_custom">
                    <img src="/assets/images/1.0/icons/payment.png" alt="img" class="footer-icon" />

                    <span class="mx-1">Payment</span>
                  </li>
                </a> -->
                <router-link :to="{ name: 'create-payment' }" class="ml-2">
                  <li class="anchor_custom">
                    <img src="/assets/images/1.0/icons/payment.png" alt="img" class="footer-icon" />
                    <span class="mx-1">Payment</span>
                  </li>
                </router-link>
              </div>
              <div v-else-if="this.isWrite_isPayment == false">
                <div></div>
              </div>

            </div>
          </a>
          <a href="javascript:void(0);" @click="Footer_Journal()">
            <div v-if="isPaid == '' || isPaid == null">
              <a href="javascript:void(0);" class="ml-2">
                <li v-b-modal.customerstatus-popup class="anchor_custom">
                  <img src="/assets/images/1.0/icons/journal.png" alt="img" class="footer-icon" />
                  <span class="mx-1">Journal</span>
                  <img class="create_crown_image" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
                </li>
              </a>
            </div>
            <div v-else>
              <div v-if="this.isWrite_isJournal == true">
                <!-- <a href="javascript:void(0);" @click="Add_new('Journal')" class="ml-2">
                  <li v-b-modal.link_popup class="anchor_custom">
                    <img src="/assets/images/1.0/icons/journal.png" alt="img" class="footer-icon" />

                    <span class="mx-1">Journal</span>
                  </li>
                </a> -->
                <router-link :to="{ name: 'create-journal' }" class="ml-2">
                  <li class="anchor_custom">
                    <img src="/assets/images/1.0/icons/journal.png" alt="img" class="footer-icon" />
                    <span class="mx-1">Journal</span>
                  </li>
                </router-link>
              </div>
              <div v-else-if="this.isWrite_isJournal == false">
                <div></div>
              </div>

            </div>
          </a>
          <a href="javascript:void(0);" @click="Footer_Contra()">
            <div v-if="isPaid == '' || isPaid == null">
              <a href="javascript:void(0);" class="ml-2">
                <li v-b-modal.customerstatus-popup class="anchor_custom">
                  <img src="/assets/images/1.0/icons/contra.png" alt="img" class="footer-icon" />
                  <span class="mx-1"> Contra</span>
                  <img class="create_crown_image" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
                </li>
              </a>
            </div>
            <div v-else>
              <div v-if="this.isWrite_isContra == true">
                <!-- <a href="javascript:void(0);" @click="Add_new('Contra')" class="ml-2">
                  <li v-b-modal.link_popup class="anchor_custom">
                    <img src="/assets/images/1.0/icons/contra.png" alt="img" class="footer-icon" />

                    <span class="mx-1"> Contra</span>
                  </li>
                </a> -->
                <router-link :to="{ name: 'create-contra' }" class="ml-2">
                  <li class="anchor_custom">
                    <img src="/assets/images/1.0/icons/contra.png" alt="img" class="footer-icon" />
                    <span class="mx-1">Contra</span>
                  </li>
                </router-link>
              </div>
              <div v-else-if="this.isWrite_isContra == false">
                <div></div>
              </div>

            </div>
          </a>


        </ul>

      </div>

      <div class="overlay" v-if="showTransaction" @click="showTransaction = false"></div>
    </div>



    <b-modal id="link_popup" class="vch_type_popup_body" size="md" title="Voucher Type" hide-footer>
      <div class="modal-content email_modal_content tx-size-sm">
        <div class="modal-body top_modal_body p-0 hg_popup">
          <div class="email_modal_body">
            <ul class="vch_type_list">
              <router-link :to="`${type.url}`" class="" v-for="(type, index) in array_type" :key="index"
                @click.native="refreshIfSameRoute">
                <li @click="$bvModal.hide('link_popup'), get_id(type.id), getVoucherType(type.voucherNumberSeriesList)">
                  {{
                    type.voucherTypeName
                  }}
                </li>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal centered id="alert_modal_for_get_data" v-if="showModalalert" class="alert_get_modal" size="md"
      title="Information" hide-footer>
      <div class="modal-content alert_get_modal_content tx-size-sm">
        <div class="modal-body top_modal_body p-0">
          <div class="email_modal_body alert_message_load_data">
            <h4>Unable to get your data, Please refresh your page</h4>
            <div class="okay_footer_button" @click="$bvModal.hide('alert_modal_for_get_data')">
              <button>Okay</button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <!------------- Upgrade to Premium New popup ------------------>

    <!-- <b-modal ref="customerstatusPopup" id="customerstatus-popup" title="" hide-footer>
      <div class="freepium-popup-header">
        <h4>Upgrade to Premium <img src="/assets/images/1.0/popup/crown.png" /></h4>
      </div>
      <div class="main-freemium-popup">
        <div class="container">
          <div class="row fremium_bottom_hr align-items-center">
            <div class="col-lg-6 col-6">
              <div class="upgrade_benefits">
                <h3>FEATURES</h3>
              </div>
            </div>
            <div class="col-lg-3 col-3 p-0" :class="{ 'selectedtickbgbox': selectedplan === 'GROWTH' }">
              <div class="growth_advance_radio">
                <label>
                  <input type="radio" cass="growth_advance_input" v-model="selectedplan" value="GROWTH" @click="choosegrowthplan">
                  <div>
                    <span class="growth_plan_input_check"><i class="fa fa-check"></i></span>
                    GROWTH
                  </div>
                </label>
              </div>
            </div>
            <div class="col-lg-3 col-3 p-0" :class="{ 'selectedtickbgbox': selectedplan === 'ADVANCED' }">
              <div class="growth_advance_radio">
                <label>
                  <input type="radio" cass="growth_advance_input" v-model="selectedplan" value="ADVANCED" @click="chooseadvancedplan">
                  <div>
                    <span class="growth_plan_input_check"><i class="fa fa-check"></i></span>
                    ADVANCED
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 col-6">
              <div class="tickmark_image_text"><div class="tickmark_text"><p>App & Web View</p></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'growthplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'advancedplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div></div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 col-6">
              <div class="tickmark_image_text"><div class="tickmark_text"><p>Payment Reminders</p></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'growthplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'advancedplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div></div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 col-6">
              <div class="tickmark_image_text"><div class="tickmark_text"><p>Create New Entries</p></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'growthplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'advancedplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div></div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 col-6">
              <div class="tickmark_image_text"><div class="tickmark_text"><p>Inactive Customers</p></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'growthplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'advancedplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div></div>
            </div>
          </div>         
          <div class="row align-items-center">
            <div class="col-lg-6 col-6">
              <div class="tickmark_image_text"><div class="tickmark_text"><p>20+ Business Reports</p></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'growthplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'advancedplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div></div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 col-6">
              <div class="tickmark_image_text"><div class="tickmark_text"><p>Tally Backup</p></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'growthplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'advancedplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div></div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 col-6">
              <div class="tickmark_image_text"><div class="tickmark_text"><p>eWay Bills</p></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'growthplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-close tick_close"></i></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'advancedplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div></div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 col-6">
              <div class="tickmark_image_text"><div class="tickmark_text"><p>eInvoices</p></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'growthplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-close tick_close"></i></div></div>
            </div>
            <div class="col-lg-3 col-3" :class="{ 'selectedtickbg': selectedplan === 'advancedplan' }">
              <div><div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div></div>
            </div>
          </div>    
          <div class="pricing_label">
            <label class="new_pricing_selection" v-if="isgrowthoneyear">
              <input type="radio" name="plan_name" v-model="selectedplanamount" value="GRBUY1Y24">
              <div class="pricing_selection_plan">
                <i class="fa fa-check-circle active_check_circle"></i>
                <div>
                  <p>1 YEARS</p>
                  <h3><span class="font_sans">₹</span> 3,000</h3>
                </div>               
              </div>
            </label>
            <label class="new_pricing_selection" v-if="isadvancedoneyear">
              <input type="radio" name="plan_name" v-model="selectedplanamount" value="ADVBUY1Y24">
              <div class="pricing_selection_plan">
                <i class="fa fa-check-circle active_check_circle"></i>
                <div>
                  <p>1 YEARS</p>
                  <h3><span class="font_sans">₹</span> 5,000</h3>
                </div>               
              </div>
            </label>
            <label class="new_pricing_selection" v-if="isgrowththreeyear">
              <input type="radio" name="plan_name" v-model="selectedplanamount" value="GRBUY2GET1Y24" >
              <div class="pricing_selection_plan">
                <i class="fa fa-check-circle active_check_circle"></i>
                <div>
                  <p>3 YEARS</p>
                  <h3><span class="text_line">
                    <span class="font_sans">₹</span> 9,000</span>
                    <span class="font_sans">₹</span> 6,000
                  </h3>
                  <div class="save_price"><span class="save_percentage">Save 33%</span></div>
                </div>
              </div>
            </label>
            <label class="new_pricing_selection" v-if="isadvancedthreeyear">
              <input type="radio" name="plan_name" v-model="selectedplanamount" value="ADVBUY2GET1Y24" >
              <div class="pricing_selection_plan">
                <i class="fa fa-check-circle active_check_circle"></i>
                <div>
                  <p>3 YEARS</p>
                  <h3><span class="text_line">
                    <span class="font_sans">₹</span> 15,000</span>
                    <span class="font_sans">₹</span> 10,000
                  </h3>
                  <div class="save_price"><span class="save_percentage">Save 33%</span></div>
                </div>
              </div>
            </label>
          </div>
          
          <div class="freemium_bottom_popup">
            <button @click="payment_proceed()" class="proceed_button_premium">Proceed</button>
          </div>
                  
        </div>
      </div>
    </b-modal> -->
    <b-modal ref="customerstatusPopup" id="customerstatus-popup" title="" hide-footer>
      <div class="freepium-popup-header">
        <h4>Choose a Plan </h4>
      </div>
      <div class="main-freemium-popup">
        <div class="container">
          <div class="row fremium_bottom_hr align-items-center">
            <div class="col-lg-9 col-9 border-right-gray">
              <div class="upgrade_benefits">
                <h3>FEATURES</h3>
              </div>
            </div>
            <div class="col-lg-3 col-3">
              <div class="upgrade_benefits text-center">
                <h3>INCLUDED</h3>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-9 col-9 border-right-gray">
              <div class="tickmark_image_text">
                <div class="tickmark_text">
                  <p class="mb-0">App & Web View</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-3">
              <div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-9 col-9 border-right-gray">
              <div class="tickmark_image_text">
                <div class="tickmark_text">
                  <p class="mb-0">Payment Reminders</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-3">
              <div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-9 col-9 border-right-gray">
              <div class="tickmark_image_text">
                <div class="tickmark_text">
                  <p class="mb-0">Create New Entries</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-3">
              <div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-9 col-9 border-right-gray">
              <div class="tickmark_image_text">
                <div class="tickmark_text">
                  <p class="mb-0">Inactive Customers</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-3">
              <div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-9 col-9 border-right-gray">
              <div class="tickmark_image_text">
                <div class="tickmark_text">
                  <p class="mb-0">20+ Business Reports</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-3">
              <div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-9 col-9 border-right-gray">
              <div class="tickmark_image_text">
                <div class="tickmark_text">
                  <p class="mb-0">Tally Backup</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-3">
              <div class="tickmark_image_text text-center"><i class="fa fa-check"></i></div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-9 col-9 border-right-gray">
              <div class="tickmark_image_text">
                <div class="tickmark_text">
                  <p class="mb-0">eWay Bills</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-3">
              <div class="tickmark_image_text text-center TextAddonsIncluded">ADDONS</div>
            </div>
          </div>
          <div class="row align-items-center border-bottom-gray">
            <div class="col-lg-9 col-9 border-right-gray">
              <div class="tickmark_image_text">
                <div class="tickmark_text">
                  <p class="mb-0">eInvoices</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-3">
              <div class="tickmark_image_text text-center TextAddonsIncluded">ADDONS</div>
            </div>
          </div>
          <div class="pricing_label">
            <label class="new_pricing_selection" @click="OneYearPlan">
              <input type="radio" name="plan_name" v-model="selectedplanamountYear" value="1Year">
              <div class="pricing_selection_plan">
                <i class="fa fa-check-circle active_check_circle"></i>
                <div>
                  <p>1 YEAR</p>
                  <h3><span class="font_sans">₹</span> 3,000</h3>
                </div>
              </div>
            </label>
            <label class="new_pricing_selection" @click="ThreeYearsPlan">
              <input type="radio" name="plan_name" v-model="selectedplanamountYear" value="3Years">
              <div class="pricing_selection_plan">
                <i class="fa fa-check-circle active_check_circle"></i>
                <div>
                  <p>3 YEARS</p>
                  <h3><span class="text_line">
                      <span class="font_sans">₹</span> 9,000</span>
                    <span class="font_sans">₹</span> 7,000
                  </h3>
                  <div class="save_price"><span class="save_percentage">Save 22%</span></div>
                </div>
              </div>
            </label>
          </div>

          <div class="freemium_bottom_popup">
            <button @click="payment_proceed_new()" class="proceed_button_premium">Proceed</button>
          </div>

        </div>
      </div>
    </b-modal>
    <!---------------- tally_data_backup popup -------------------->
    <b-modal id="tally_data_backup" title="" hide-footer>
      <div class="tallybackup-popup-header">
        <h4>Company: {{ this.companyName }}</h4>
      </div>
      <div class="tally_data-backup_table">
        <table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Last Backup Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bkp in bkp_data_array">
              <td>
                <span class="backup_input">
                  <input type="radio" cass="databackup_input" v-model="tallydatabackup" :value="`${bkp.backUpUrl}`">
                  <span class="backup_radio"></span>
                  {{ bkp.fileName }}
                </span>
              </td>
              <td>{{ format_date(bkp.backUpDate) }}</td>
              <!-- <td>26 Feb' 24 11:56</td> -->
            </tr>
          </tbody>
        </table>
      </div>
      <div class="download_backup" @click="downloadFile()"><button>Download</button></div>
    </b-modal>
    <!------------ payment success popup ------------>

  </footer>
</template>

<script>
import Vue from "vue";
var numeral = require("numeral");

Vue.filter("formatNumberParties", function (value) {

  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});

import EventBus from "../eventBus";
import axios from "axios";
import moment from "moment";
import Api from "@/Api";
import Common from "@/Common";
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from "vue2-daterange-picker";
import CryptoJS from 'crypto-js';
export default {
  data() {
    return {
      tallydatabackup: 0,
      isgrowthoneyear: true,
      isgrowththreeyear: true,
      isadvancedoneyear: false,
      isadvancedthreeyear: false,
      selectedplan: 'GROWTH',
      selectedplanamount: 'GRBUY1Y24',
      selectedplanamountYear: '3Years',
      active_el: 2,
      showModalalert: true,
      showTransaction: false,
      // linkTransaction: false,
      array_type: [],
      customermobile: "",
      url: "",
      isPaid: "",
      source: "",
      isWrite_isContra: true,
      isWrite_isCreditNote: true,
      isWrite_isDebitNote: true,
      isWrite_isJournal: true,
      isWrite_isPayment: true,
      isWrite_isPurchase: true,
      isWrite_isPurchaseOrder: true,
      isWrite_isReceipt: true,
      isWrite_isSales: true,
      isWrite_isSalesOrder: true,
      isWrite_isQuotation: true,
      isWrite_isLedger: true,
      isWrite_isStockItem: true,
      // componentKey: 0,
      showSalesLabel: true,
      showPurchaseLabel: true,
      showPlusIcon: true,
      totalNetAmount: "",
      final_response: "",
      razorpayOrderId: '',
      username: "",
      subUsers: [],
      payment_redirect_success: false,
      licenceEndDate: "",
      totalGrossAmount: "",
      totalGstAmount: "",
      totalSubTotal: "",
      order_id: "",
      companyName: "",
      bkp_data_array: [],
    };
  },
  computed: {
    shouldShowButton() {
      const hiddenRoutes = ['sales-voucher-v4', 'gsploginnew', 'create-journal-type-voucher-id', 'create-receipt-type-voucher-id', 'create-payment-type-voucher-id', 'create-contra-type-voucher-id', 'sales-voucher-type-with-voucher-id', 'create-creditnote-type-voucher-id', 'create-debit-note-type-voucher-id', 'sales-order-voucher-type-with-voucher-id', 'purchase-order-voucher-type-voucher-id', 'purchase-voucher-type-voucher-id', 'create-quotation-voucher-id', 'purchase-voucher-v4', 'create-quotation-v4', 'create-creditnote', 'create-receipt', 'create-payment', 'sales-order-voucher-V4', 'create-journal', 'create-contra', 'purchase-order-voucher-v4', 'create-debit-note-v4'];
      return !hiddenRoutes.includes(this.$route.name);
    }
  },
  watch: {
    $route(to, from) {
      this.customermobile = localStorage.getItem("customermobile");
    },
  },
  created() {

    window.addEventListener('storageChanged', () => {
      this.showSalesLabel = true;
      this.showPurchaseLabel = true;
      this.showPlusIcon = true;

      this.isWrite_isContra = JSON.parse(
        localStorage.getItem("isWrite_isContra")
      );
      this.isWrite_isCreditNote = JSON.parse(
        localStorage.getItem("isWrite_isCreditNote")
      );
      this.isWrite_isDebitNote = JSON.parse(
        localStorage.getItem("isWrite_isDebitNote")
      );
      this.isWrite_isJournal = JSON.parse(
        localStorage.getItem("isWrite_isJournal")
      );
      this.isWrite_isPayment = JSON.parse(
        localStorage.getItem("isWrite_isPayment")
      );
      this.isWrite_isPurchase = JSON.parse(
        localStorage.getItem("isWrite_isPurchase")
      );
      this.isWrite_isPurchaseOrder = JSON.parse(
        localStorage.getItem("isWrite_isPurchaseOrder")
      );
      this.isWrite_isReceipt = JSON.parse(
        localStorage.getItem("isWrite_isReceipt")
      );
      this.isWrite_isSales = JSON.parse(
        localStorage.getItem("isWrite_isSales")
      );
      this.isWrite_isSalesOrder = JSON.parse(
        localStorage.getItem("isWrite_isSalesOrder")
      );
      this.isWrite_isLedger = JSON.parse(
        localStorage.getItem("isWrite_isLedger")
      );
      this.isWrite_isStockItem = JSON.parse(
        localStorage.getItem("isWrite_isStockItem")
      );
      this.isWrite_isQuotation = JSON.parse(
        localStorage.getItem("isWrite_isQuotation")
      );

      if (
        !this.isWrite_isContra &&
        !this.isWrite_isCreditNote &&
        !this.isWrite_isDebitNote &&
        !this.isWrite_isJournal &&
        !this.isWrite_isPayment &&
        !this.isWrite_isPurchase &&
        !this.isWrite_isPurchaseOrder &&
        !this.isWrite_isReceipt &&
        !this.isWrite_isSales &&
        !this.isWrite_isSalesOrder &&

        !this.isWrite_isQuotation
      ) {

        this.showPlusIcon = false;
      } else if (
        !this.isWrite_isSales &&
        !this.isWrite_isSalesOrder &&
        !this.isWrite_isCreditNote &&
        !this.isWrite_isQuotation &&
        !this.isWrite_isReceipt
      ) {

        this.showSalesLabel = false;
      } else if (
        !this.isWrite_isPurchase &&
        !this.isWrite_isPurchaseOrder &&
        !this.isWrite_isDebitNote &&
        !this.isWrite_isPayment &&
        !this.isWrite_isJournal &&
        !this.isWrite_isContra
      ) {
        this.showPurchaseLabel = false;
      }
    });
  },
  methods: {
    refreshIfSameRoute(event) {
      event.preventDefault();
      this.$router.go(0);
    },
    Footer_Sales() {
      GoogleAnalytics.Footer_Sales_event();
    },
    Footer_Salesorder() {
      GoogleAnalytics.Footer_Salesorder_event();
    },
    Footer_Creditnote() {
      GoogleAnalytics.Footer_Creditnote_event();
    },
    Footer_Quotation() {
      GoogleAnalytics.Footer_Quotation_event();
    },
    Footer_Receipt() {
      GoogleAnalytics.Footer_Receipt_event();
    },
    Footer_Purchase() {
      GoogleAnalytics.Footer_Purchase_event();
    },
    Footer_Purchaseorder() {
      GoogleAnalytics.Footer_Purchaseorder_event();
    },
    Footer_Debitnote() {
      GoogleAnalytics.Footer_Debitnote_event();
    },
    Footer_Payment() {
      GoogleAnalytics.Footer_Payment_event();
    },
    Footer_Journal() {
      GoogleAnalytics.Footer_Journal_event();
    },
    Footer_Contra() {
      GoogleAnalytics.Footer_Contra_event();
    },

    closeModalPricingPopup() {
      this.$refs.customerstatusPopup.hide();
    },
    get_id(id) {
      localStorage.setItem("VoucherTypesId", id)
    },
    getVoucherType(type) {

      for (let [key, value] of Object.entries(type)) {
        localStorage.setItem('voucherType', value.numberingMethod)
      }
    },
    format_date(value) {
      value = value.split(" ")[0];
      if (value) {
        if (value == "1900-01-01") {
          value = "-"
          return value
        }
        else {
          return moment(String(value)).format("DD MMM yyyy hh:mm:ss");
        }
      }
    },
    payment_proceed_new() {
      if (this.selectedplanamountYear == "3Years") {
        var y = 3;
        GoogleAnalytics.PopupThreeYearsPlans();
      } else {
        var y = 1;
        GoogleAnalytics.PopupOneYearPlan();
      }
      var url = "https://pay.livekeeping.com/" + localStorage.getItem('mobile') + "?p=" + y;
      window.open(url, "_blank");
    },
    payment_proceed() {
      if (localStorage.getItem('subUsers') != "") {
        this.free_popup();
      } else {
        const currentDate = moment();
        const diff = moment(localStorage.getItem('gtagendDate'), 'YYYY-MM-DD HH:mm:ss').diff(currentDate, 'days');
        this.customer_status = localStorage.getItem('customerStatus');
        if (this.customer_status.toLowerCase().includes('converted') && diff > 30) {
          // ADD_USER
          this.check_order_type = "ADD_USER";
        } else if (!this.customer_status.toLowerCase().includes('converted') && !this.customer_status.toLowerCase().includes('not renewed')) {
          // NEW_USER
          this.check_order_type = "NEW_USER";
        } else if (this.customer_status.toLowerCase().includes('not renewed')) {
          // RETURNING_USER
          this.check_order_type = "RETURNING_USER";
        } else if (this.customer_status.toLowerCase().includes('converted') && diff <= 30) {
          // RENEWAL
          this.check_order_type = "RENEWAL";
        }
        var data = {
          requestFrom: "WEB",
          _userId: localStorage.getItem('customerId'),
          couponCode: this.selectedplanamountYear,
          totalUsers: 1,
          planType: this.selectedplanamountYear,
          OrderType: this.check_order_type,
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.getPriceCalculation(data, headers)
          .then((response) => {
            const responseStatus = Common.getStatusForActionFailed(response.data.status);
            if (responseStatus == 200) {
              this.totalNetAmount = response.data.data.totalNetAmount;
              this.totalBillingDiscountAmount = response.data.data.totalBillingDiscountAmount;
              this.totalGrossAmount = response.data.data.totalGrossAmount;
              this.totalGstAmount = response.data.data.totalGstAmount;
              this.totalSubTotal = response.data.data.totalSubTotal;
              this.final_response = response.data.data;
              var inputDate = moment(response.data.data.customerLicenceDetails.licenceEndDate);
              this.licenceEndDate = inputDate.format("DD MMM YYYY");
              this.closeModalPricingPopup();
              // this.loadRazorpay();
            }
          })
          .catch((err) => {

          });
      }


    },
    loadRazorpay() {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        this.setupRazorpay();
      };
      document.head.appendChild(script);
    },
    setupRazorpay() {

      const options = {
        key: 'rzp_live_TDDT781dbbC70i',
        amount: this.totalNetAmount * 100,
        currency: 'INR',
        order_id: this.razorpayOrderId,
        name: 'Livekeeping (An Indiamart Company)',
        description: 'Live keeping',
        image: 'data:image/png;base64,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',
        prefill: {
          name: localStorage.getItem('name'),
          email: localStorage.getItem('email'),
          contact: localStorage.getItem('mobile')
        },
        theme: {
          color: '#17cb3f'
        },
        handler: (response) => {

          console.log(response.razorpay_payment_id);


          console.log(response);
          // successfully Case
          if (response.razorpay_payment_id && response.razorpay_payment_id != "") {
            this.order_id = response.razorpay_payment_id;
            this.add_order(response.razorpay_payment_id);
          }

        }
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    },
    createRazorpayOrder() {

      if (this.totalNetAmount <= 0 || !this.mobileNumber) {
        return;
      }


      axios.post('/api/createRazorpayOrder', {
        gross_total_pay: this.totalNetAmount,
        mobile_number_pay: this.mobileNumber
      })
        .then(response => {


          const { amount, mobile_number, id: razorpayOrderId } = response.data;
          this.razorpayOrderId = razorpayOrderId;

        })
        .catch(error => {
          // Handle error
          console.error('Error creating Razorpay order:', error);
        });
    },
    add_order(transactionId) {
      const data = {
        requestFrom: "WEB",
        _userId: localStorage.getItem('customerId'),
        allocatedTo: localStorage.getItem('customerId'),
        allocatedBy: "",
        PlanType: this.selectedplanamountYear,
        couponCode: this.final_response.couponCode,
        salesDetails: this.final_response.salesDetails,
        invoiceDetails: {
          "gstNumber": "",
          "companyName": "",
          "panNumber": "",
          "invoiceSend": false,
          "paymentReceived": true,
          "perfomaInvoiceSend": false,
          "perfomaInvoiceCreated": false,
          "invoiceDate": "",
          "invoiceId": "",
          "invoiceNumber": "",
          "companyEmail": localStorage.getItem('email'),
          "mobile": localStorage.getItem('mobile')
        },
        customerLicenceDetails: this.final_response.customerLicenceDetails,
        orderPlacedBy: "WEB",
        status: "PENDING",
        remark: "",
        transactionId: transactionId,
        transactionSource: "RAZORPAY",
        orderPlacedSource: "WEB",
        transactionType: "ADMIN_TO_CUSTOMER",
        freeze: false,
        convenienceFee: false,
        totalSubTotal: this.final_response.totalSubTotal,
        totalGstAmount: this.final_response.totalGstAmount,
        totalNetAmount: this.final_response.totalNetAmount,
        orderApprovedById: "",
        orderApprovedByName: "",
        smsCreditDetails: this.final_response.smsCreditDetails
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "token": localStorage.getItem('webAuthToken'),
      };
      Api.addOrder(data, headers)
        .then((response) => {
          const responseStatus = Common.getStatusForActionFailed(response.data.status);
          if (responseStatus == 200) {
            this.username = localStorage.getItem('name');


            setTimeout(() => {
              window.location.href = "https://www.livekeeping.com";
            }, 10000);
          } else {

          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status)
        });
    },
    choosegrowthplan() {
      this.isgrowthoneyear = true;
      this.isgrowththreeyear = true;
      this.isadvancedoneyear = false;
      this.isadvancedthreeyear = false;
      this.selectedplanamount = "GRBUY1Y24";
    },
    chooseadvancedplan() {
      this.isgrowthoneyear = false;
      this.isgrowththreeyear = false;
      this.isadvancedoneyear = true;
      this.isadvancedthreeyear = true;
      this.selectedplanamount = "ADVBUY1Y24";
    },
    OneYearPlan() {
      this.selectedplanamountYear = "1Year";
    },
    ThreeYearsPlan() {
      this.selectedplanamountYear = "3Years";
    },
    activate: function (el) {
      this.active_el = el;
    },
    showModalalert_check() {
      this.showModalalert = true;
    },
    Add_new(event) {
      this.gettype(event);
    },
    gettype(event = "") {
      const data = {
        requestFrom: "WEB",
        searchTerm: "",
        startLimit: 0,
        endLimit: 100,
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        parent: event,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getVoucherTypes(data, headers).then((response) => {
        if (response.data.message == "AUTHENTICATION_FAILED") {
          localStorage.clear();
          window.location.href = "/";
        } else {
          console.log(response);
          for (let [key, value] of Object.entries(response.data.data.list)) {
            if (event === "Sales") {
              response.data.data.list[key].url =
                "/sales-voucher" +
                "/" +
                encodeURIComponent(response.data.data.list[key].voucherTypeName);
            }
            if (event === "Receipt") {
              response.data.data.list[key].url =
                "/create-receipt" +
                "/" +
                response.data.data.list[key].voucherTypeName;
            }
            if (event === "Sales Order") {
              response.data.data.list[key].url =
                "/sales-order-voucher" +
                "/" +
                response.data.data.list[key].voucherTypeName;
            }
            if (event === "Credit Note") {
              response.data.data.list[key].url =
                "/create-creditnote" +
                "/" +
                response.data.data.list[key].voucherTypeName;
            }
            if (event === "Purchase") {
              response.data.data.list[key].url =
                "/purchase-voucher" +
                "/" +
                response.data.data.list[key].voucherTypeName;
            }
            if (event === "Purchase Order") {
              response.data.data.list[key].url =
                "/purchase-order-voucher" +
                "/" +
                response.data.data.list[key].voucherTypeName;
            }
            if (event === "Payment") {
              response.data.data.list[key].url =
                "/create-payment" +
                "/" +
                response.data.data.list[key].voucherTypeName;
            }
            if (event === "Debit Note") {
              response.data.data.list[key].url =
                "/create-debit-note" +
                "/" +
                response.data.data.list[key].voucherTypeName;
            }
            if (event === "Journal") {
              response.data.data.list[key].url =
                "/create-journal" +
                "/" +
                response.data.data.list[key].voucherTypeName;
            }
            if (event === "Contra") {
              response.data.data.list[key].url =
                "/create-contra" +
                "/" +
                response.data.data.list[key].voucherTypeName;
            }
          }
          this.array_type = response.data.data.list;
        }
      });
    },
    encryptURL(url) {
      const secretKey = '1234567891';
      const ciphertext = CryptoJS.AES.encrypt(url, secretKey).toString();
      return encodeURIComponent(ciphertext);
    },
    //     free_popup() {

    // this.url =
    //   "https://pay.livekeeping.com/" + this.encryptURL(localStorage.getItem("mobile")) + "?plan=" + this.encryptURL(this.selectedplanamount) + "&type=" + this.encryptURL(this.selectedplan);

    // window.open(this.url, "_blank");
    // window.location.href = `https://pay.livekeeping.com?plan=${this.selectedplanamountYear}`, '_blank';
    // },
    bkp_data() {
      var data = {
        _userId: localStorage.getItem('customerId'),
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.get_filter_by_companyGo(data, headers).then((response) => {
        if (response.data.message == "AUTHENTICATION_FAILED") {
          localStorage.clear();
          window.location.href = "/";
        } else {
          this.bkp_data_array = [];
          this.companyName = response.data.data.companyName;
          localStorage.setItem("companyName", this.companyName);
          localStorage.setItem("companyNumber", response.data.data.companyNumber);
          localStorage.setItem("decimalPlaces", response.data.data.decimalPlaces);
          localStorage.setItem("booksFrom", response.data.data.booksFrom);

          for (let [key, value] of Object.entries(response.data.data.backUpDetails)) {
            if (key == 0) {
              this.tallydatabackup = value.backUpUrl;
            }

          }
          this.bkp_data_array = response.data.data.backUpDetails;

        }
      });
    },
    downloadFile() {
      const url = this.tallydatabackup;
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', this.tallydatabackup);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
  async mounted() {
    setTimeout(() => {

      this.isPaid = localStorage.getItem("isPaid");
    }, 1000);
    // this.isPaid = "";
    this.source = localStorage.getItem("source");
    this.tallyVersionStatus = localStorage.getItem("tallyVersionStatus");
    if (this.tallyVersionStatus == "1") {
      this.source = "sf";
    }
    this.customermobile = localStorage.getItem("customermobile");
    this.showModalalert_check();
    this.bkp_data();
  },
};
</script>
