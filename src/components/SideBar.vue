/*
(c) 2023 Livekeeping Technologies Pvt Ltd.
License: Proprietary
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<template>
    <aside class="app-sidebar">
        <div class="app-sidebar__logo">
            <router-link class="header-brand" :to="{ name: 'dashboard' }">
                <!-- <span class="beta-text header-brand-img desktop-lgo">Beta</span> -->
                <img src="/assets/images/1.0/brand/live-keeping-logo2.png" class="header-brand-img desktop-lgo"
                    alt="livekeeping logo">
                <img src="/assets/images/1.0/brand/live-keeping-logo2.png" class="header-brand-img dark-logo"
                    alt="livekeeping logo">
                <img src="/assets/images/1.0/brand/only-lkp-logo.png" class="header-brand-img mobile-logo"
                    alt="livekeeping logo">
                <img src="/assets/images/1.0/brand/only-lkp-logo.png" class="header-brand-img darkmobile-logo"
                    alt="livekeeping logo">
            </router-link>
        </div>

        <ul class="side-menu app-sidebar3">
            <li class="slide mob_remove">

                <router-link class="side-menu__item new-active-class" :to="{ name: 'dashboard' }">
                    <!-- <img src="/assets/images/1.0/icons/dashboard-unfill.png" class="img-fluid side-menu__icon sidebar_unfill_icon" />
                            <img src="/assets/images/1.0/icons/dashboard-fill.png" class="img-fluid side-menu__icon sidebar_fill_icon" /> -->
                    <img src="/assets/images/1.0/svgs/sidebar-black/dashboard.svg"
                        class="img-fluid side-menu__icon sidebar_unfill_icon" />
                    <img src="/assets/images/1.0/svgs/sidebar-black/dashboard-active.svg"
                        class="img-fluid side-menu__icon sidebar_fill_icon" />
                    <img src="/assets/images/1.0/svgs/dashboard-mobile-active.svg"
                        class="img-fluid side-menu__icon sidebar_mobile_fill_active" />
                    <span class="side-menu__label">Dashboard</span>
                </router-link>
            </li>
            <li class="slide mob_remove" v-show="showCreateVoucher" v-if="this.source !== 'sf'">
                <a href="javascript:void(0);" class="side-menu__item DropdownMenuCreateVoucher"
                :class="{ active: isActive }">
                    <img src="/assets/images/1.0/svgs/plusicon.svg" class="img-fluid side-menu__icon" />
                    <span class="side-menu__label">Create Vouchers</span>
                    <i class="angle fa fa-chevron-right" style="transform: rotate(0deg);"></i>
                    <div class="rightDropdownVoucherpoint">
                        <ul>
                            <li>
                                <a href="javascript:void(0);" @click="Sidebar_Quotation()">
                                    <div v-if="this.isWrite_isQuotation == false">
                                        <div></div>
                                    </div>
                                    <div v-else>
                                        <router-link :to="{ name: 'create-quotation-v4' }" class="ml-2"
                                            @click.native="refreshIfSameRoute">
                            <li class="">
                                <span class="mx-1">Quotation</span>
                            </li></router-link>
                    </div>
                </a>
            </li>

            <li>
                <a href="javascript:void(0);" @click="Sidebar_Sales()">
                    <div v-if="isPaid == '' || isPaid == null">
                        <a href="javascript:void(0);" class="ml-2">
            <li v-b-modal.customerstatus-popup class="">
                <span class="mx-1">Sales Invoice</span>
                <img class="SidebarCrownImageVoucher" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
            </li></a>
            </div>
            <div v-else>
                <div v-if="this.isWrite_isSales == true">
                    <!-- <a href="javascript:void(0);" @click="Add_new('Sales')" class="ml-2">
                        <li v-b-modal.link_popup_sidebar class="">
                            <span class="mx-1">Sales Invoice</span>
                        </li>
                    </a> -->
                    <router-link :to="{ name: 'sales-voucher-v4' }" class="ml-2" @click.native="refreshIfSameRoute">
                        <li class="">
                            <span class="mx-1">Sales Invoice</span>
                        </li>
                    </router-link>
                </div>
                <div v-else-if="this.isWrite_isSales == false">
                    <div></div>
                </div>
            </div>
            </a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="Sidebar_Receipt()">
                    <div v-if="isPaid == '' || isPaid == null">
                        <a href="javascript:void(0);" class="ml-2">
            <li v-b-modal.customerstatus-popup class="">
                <span class="mx-1">Receipt</span>
                <img class="SidebarCrownImageVoucher" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
            </li>
            </a>
            </div>
            <div v-else>
                <div v-if="this.isWrite_isReceipt == true">
                    <!-- <a href="javascript:void(0);" @click="Add_new('Receipt')" class="ml-2">
                        <li v-b-modal.link_popup_sidebar class="">
                            <span class="mx-1">Receipt</span>
                        </li>
                    </a> -->
                    <router-link :to="{ name: 'create-receipt' }" class="ml-2" @click.native="refreshIfSameRoute">
                        <li class="">
                            <span class="mx-1">Receipt</span>
                        </li>
                    </router-link>
                </div>
                <div v-else-if="this.isWrite_isReceipt == false">
                    <div></div>
                </div>
            </div>
            </a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="Sidebar_Payment()">
                    <div v-if="isPaid == '' || isPaid == null">
                        <a href="javascript:void(0);" class="ml-2">
            <li v-b-modal.customerstatus-popup class="">
                <span class="mx-1">Payment</span>
                <img class="SidebarCrownImageVoucher" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
            </li></a>
            </div>
            <div v-else>
                <div v-if="this.isWrite_isPayment == true">
                    <!-- <a href="javascript:void(0);" @click="Add_new('Payment')" class="ml-2">
                        <li v-b-modal.link_popup_sidebar class="">
                            <span class="mx-1">Payment</span>
                        </li>
                    </a> -->
                    <router-link :to="{ name: 'create-payment' }" class="ml-2" @click.native="refreshIfSameRoute">
                        <li class="">
                            <span class="mx-1">Payment</span>
                        </li>
                    </router-link>
                </div>
                <div v-else-if="this.isWrite_isPayment == false">
                    <div></div>
                </div>

            </div>
            </a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="Sidebar_Salesorder()">
                    <div v-if="isPaid == '' || isPaid == null">
                        <a href="javascript:void(0);" @click="Add_new('Sales Order')" class="ml-2">
            <li v-b-modal.customerstatus-popup class="">
                <span class="mx-1">Sales Order</span>
                <img class="SidebarCrownImageVoucher" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
            </li></a>
            </div>
            <div v-else>
                <div v-if="this.isWrite_isSalesOrder == true">
                    <!-- <a href="javascript:void(0);" @click="Add_new('Sales Order')" class="ml-2">
                        <li v-b-modal.link_popup_sidebar class="">
                            <span class="mx-1">Sales Order</span>
                        </li>
                    </a> -->

                    <router-link :to="{ name: 'sales-order-voucher-V4' }" class="ml-2"
                        @click.native="refreshIfSameRoute">
                        <li class="">
                            <span class="mx-1">Sales Order</span>
                        </li>
                    </router-link>
                </div>
            </div>
            </a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="Sidebar_Purchase()">
                    <div v-if="isPaid == '' || isPaid == null">
                        <a href="javascript:void(0);" class="ml-2">
            <li v-b-modal.customerstatus-popup class="">
                <span class="mx-1">Purchase Invoice</span>
                <img class="SidebarCrownImageVoucher" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
            </li></a>
            </div>
            <div v-else>
                <div v-if="this.isWrite_isPurchase == true">
                    <!-- <a href="javascript:void(0);" @click="Add_new('Purchase')" class="ml-2">
                        <li v-b-modal.link_popup_sidebar class="">
                            <span class="mx-1">Purchase Invoice</span>
                        </li>
                    </a> -->
                    <router-link :to="{ name: 'purchase-voucher-v4' }" class="ml-2" @click.native="refreshIfSameRoute">
                        <li class="">
                            <span class="mx-1">Purchase Invoice</span>
                        </li>
                    </router-link>
                </div>
                <div v-else-if="this.isWrite_isPurchase == false">
                    <div></div>
                </div>
            </div>
            </a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="Sidebar_Journal()">
                    <div v-if="isPaid == '' || isPaid == null">
                        <a href="javascript:void(0);" class="ml-2">
            <li v-b-modal.customerstatus-popup class="">
                <span class="mx-1">Journal</span>
                <img class="SidebarCrownImageVoucher" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
            </li></a>
            </div>
            <div v-else>
                <div v-if="this.isWrite_isJournal == true">
                    <!-- <a href="javascript:void(0);" @click="Add_new('Journal')" class="ml-2">
                        <li v-b-modal.link_popup_sidebar class="">
                            <span class="mx-1">Journal</span>
                        </li>
                    </a> -->
                    <router-link :to="{ name: 'create-journal' }" class="ml-2" @click.native="refreshIfSameRoute">
                        <li class="">
                            <span class="mx-1">Journal</span>
                        </li>
                    </router-link>
                </div>
                <div v-else-if="this.isWrite_isJournal == false">
                    <div></div>
                </div>

            </div>
            </a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="Sidebar_Contra()">
                    <div v-if="isPaid == '' || isPaid == null">
                        <a href="javascript:void(0);" class="ml-2">
            <li v-b-modal.customerstatus-popup class="">
                <span class="mx-1"> Contra</span>
                <img class="SidebarCrownImageVoucher" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
            </li></a>
            </div>
            <div v-else>
                <div v-if="this.isWrite_isContra == true">
                    <!-- <a href="javascript:void(0);" @click="Add_new('Contra')" class="ml-2">
                        <li v-b-modal.link_popup_sidebar class="">
                            <span class="mx-1"> Contra</span>
                        </li>
                    </a> -->
                    <router-link :to="{ name: 'create-contra' }" class="ml-2"
                        @click.native="refreshIfSameRoute">
                        <li class="">
                            <span class="mx-1">Contra</span>
                        </li>
                    </router-link>
                </div>
                <div v-else-if="this.isWrite_isContra == false">
                    <div></div>
                </div>

            </div>
            </a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="Sidebar_Purchaseorder()">
                    <div v-if="isPaid == '' || isPaid == null">
                        <a href="javascript:void(0);" class="ml-2">
            <li v-b-modal.customerstatus-popup class="">
                <span class="mx-1">Purchase Order</span>
                <img class="SidebarCrownImageVoucher" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
            </li></a>
            </div>
            <div v-else>
                <div v-if="this.isWrite_isPurchaseOrder == true">
                    <!-- <a href="javascript:void(0);" @click="Add_new('Purchase Order')" class="ml-2">
                        <li v-b-modal.link_popup_sidebar class="">
                            <span class="mx-1">Purchase Order</span>
                        </li>
                    </a> -->
                    <router-link :to="{ name: 'purchase-order-voucher-v4' }" class="ml-2"
                        @click.native="refreshIfSameRoute">
                        <li class="">
                            <span class="mx-1">Purchase Order</span>
                        </li>
                    </router-link>
                </div>
                <div v-else-if="this.isWrite_isPurchaseOrder == false">
                    <div></div>
                </div>

            </div>
            </a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="Sidebar_Creditnote()">
                    <div v-if="isPaid == '' || isPaid == null">
                        <a href="javascript:void(0);" class="ml-2">
            <li v-b-modal.customerstatus-popup class="">
                <span class="mx-1">Credit Note</span>
                <img class="SidebarCrownImageVoucher" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
            </li></a>
            </div>
            <div v-else>
                <div v-if="this.isWrite_isCreditNote == true">
                    <!-- <a href="javascript:void(0);" @click="Add_new('Credit Note')" class="ml-2">
                        <li v-b-modal.link_popup_sidebar class="">
                            <span class="mx-1">Credit Note</span>

                        </li>
                    </a> -->
                    <router-link :to="{ name: 'create-creditnote' }" class="ml-2" @click.native="refreshIfSameRoute">
                        <li class="">
                            <span class="mx-1">Credit Note</span>
                        </li>
                    </router-link>
                </div>
                <div v-else-if="this.isWrite_isCreditNote == false">
                    <div></div>
                </div>
            </div>
            </a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="Sidebar_Debitnote()">
                    <div v-if="isPaid == '' || isPaid == null">
                        <a href="javascript:void(0);" class="ml-2">
            <li v-b-modal.customerstatus-popup class="">
                <span class="mx-1">Debit Note</span>
                <img class="SidebarCrownImageVoucher" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
            </li></a>
            </div>
            <div v-else>
                <div v-if="this.isWrite_isDebitNote == true">
                    <!-- <a href="javascript:void(0);" @click="Add_new('Debit Note')" class="ml-2">
                        <li v-b-modal.link_popup_sidebar class="">
                            <span class="mx-1">Debit Note</span>
                        </li>
                    </a> -->
                    <router-link :to="{ name: 'create-debit-note-v4' }" class="ml-2" @click.native="refreshIfSameRoute">
                        <li class="">
                            <span class="mx-1">Debit Note</span>
                        </li>
                    </router-link>
                </div>
                <div v-else-if="this.isWrite_isDebitNote == false">
                    <div></div>
                </div>

            </div>
            </a>
            </li>

        </ul>
        </div>
        </a>
        </li>

        <li class="slide submenu_menu">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);">
                <img src="/assets/images/1.0/svgs/sidebar-black/sales.svg"
                    class="img-fluid side-menu__icon sidebar_unfill_icon" />
                <img src="/assets/images/1.0/svgs/sidebar-black/sales-active.svg"
                    class="img-fluid side-menu__icon sidebar_fill_icon" />
                <!-- <img src="/assets/images/1.0/icons/sales-unfill (1).png" class="img-fluid side-menu__icon sidebar_unfill_icon" />
                            <img src="/assets/images/1.0/icons/sales-fill.png" class="img-fluid side-menu__icon sidebar_fill_icon" /> -->
                <img src="/assets/images/1.0/svgs/sales-mobile-active.svg"
                    class="img-fluid side-menu__icon sidebar_mobile_fill_active" />
                <span class="side-menu__label">Sales</span>
                <i class="angle fa fa-chevron-right right_arrow_sidebar"></i>
            </a>
            <ul class="slide-menu slide_custom_menu">
                <li v-if="JSON.parse(this.isRead_isSales) == true" class=" mob_remove" @click="resetSalesStates">
                    <router-link class="slide-item" :to="{ name: 'dashboard-sales-month' }">Sales </router-link>

                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">Sales <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>

                </li>
                <li v-if="JSON.parse(this.isRead_isCreditNote) == true" class=" mob_remove"
                    @click="resetCreditNoteState">
                    <router-link class="slide-item" :to="{ name: 'dashboard-creditnote-month' }">Credit Note
                    </router-link>

                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">Credit Note <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>

                </li>

                <li v-if="JSON.parse(this.isRead_isReceipt) == true" class=" mob_remove" @click="resetReceiptState">
                    <router-link class="slide-item" :to="{ name: 'dashboard-receipt-month' }"> Receipt </router-link>
                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">Receipt <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>

                </li>
                <li v-if="JSON.parse(this.isRead_isOutstandingReceivable) == true" class=" mob_remove"
                    @click="ResetReceivableStates">
                    <router-link class="slide-item" :to="{ name: 'dashboard-receivables' }"> Receivables
                    </router-link>
                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">Receivables <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>

                </li>
                <li v-if="JSON.parse(this.isRead_isSalesOrder) == true" class=" mob_remove"
                    @click="ResetSalesOrderStates">
                    <router-link class="slide-item" :to="{ name: 'sales-order-month' }">Sales Order</router-link>
                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">Sales Order <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>

                </li>
            </ul>
        </li>



        <li class="slide submenu_menu">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);">
                <img src="/assets/images/1.0/svgs/sidebar-black/purchase.svg"
                    class="img-fluid side-menu__icon sidebar_unfill_icon" />
                <!-- <img src="/assets/images/1.0/svgs/sidebar-black/purchase-active.svg"
                        class="img-fluid side-menu__icon sidebar_fill_icon" /> -->
                <img src="/assets/images/1.0/svgs/sidebar-black/purchase-active.svg"
                    class="img-fluid side-menu__icon sidebar_fill_icon" />
                <img src="/assets/images/1.0/svgs/purchase-mobile-active.svg"
                    class="img-fluid side-menu__icon sidebar_mobile_fill_active" />
                <span class="side-menu__label">Purchase</span>
                <i class="angle fa fa-chevron-right right_arrow_sidebar"></i>
            </a>
            <ul class="slide-menu slide_custom_menu">
                <li v-if="JSON.parse(this.isRead_isPurchase) == true" class=" mob_remove" @click="ResetPurchaseStates">
                    <router-link class="slide-item" :to="{ name: 'dashboard-purchase-month' }"> Purchase</router-link>
                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">Purchase <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>
                </li>
                <li v-if="JSON.parse(this.isRead_isDebitNote) == true" class=" mob_remove"
                    @click="ResetDebitNoteStates">
                    <router-link class="slide-item" :to="{ name: 'dashboard-debitnote-month' }"> Debit
                        Note</router-link>
                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">Debit Note <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>
                </li>

                <li v-if="JSON.parse(this.isRead_isPayment) == true" class=" mob_remove" @click="ResetPaymentStates">
                    <router-link class="slide-item" :to="{ name: 'dashboard-payment-month' }"> Payment</router-link>
                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">Payment <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>
                </li>
                <li v-if="JSON.parse(this.isRead_isOutstandingPayable) == true" class=" mob_remove"
                    @click="ResetPayablesStates">
                    <router-link class="slide-item" :to="{ name: 'dashboard-payables' }"> Payables</router-link>
                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">Payables <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>
                </li>
                <li v-if="JSON.parse(this.isRead_isPurchaseOrder) == true" class=" mob_remove"
                    @click="ResetPurchaseOrderStates">
                    <router-link class="slide-item" :to="{ name: 'purchase-order-month' }"> Purchase Order</router-link>
                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">Purchase Order <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>
                </li>

            </ul>
        </li>


        <li class="slide submenu_menu">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);">
                <img src="/assets/images/1.0/svgs/sidebar-black/bank.svg"
                    class="img-fluid side-menu__icon sidebar_unfill_icon" />
                <img src="/assets/images/1.0/svgs/sidebar-black/bank-active.svg"
                    class="img-fluid side-menu__icon sidebar_fill_icon" />
                <img src="/assets/images/1.0/svgs/bank-mobile-active.svg"
                    class="img-fluid side-menu__icon sidebar_mobile_fill_active" />
                <span class="side-menu__label">Cash & Bank</span>
                <i class="angle fa fa-chevron-right right_arrow_sidebar"></i>
            </a>
            <ul class="slide-menu slide_custom_menu">

                <li v-if="JSON.parse(this.isRead_isCash) == true" class=" mob_remove">
                    <router-link class="slide-item"
                        :to="{ name: 'cash-voucher-list', params: { v_type: 'Cash-in-Hand' } }">Cash</router-link>

                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">Cash <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>
                </li>
                <li v-if="JSON.parse(this.isRead_isBank) == true" class=" mob_remove">
                    <router-link class="slide-item"
                        :to="{ name: 'bank-voucher-list', params: { v_type: 'Bank Accounts' } }">Bank</router-link>

                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">Bank <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>
                </li>

            </ul>
        </li>



        <li class="slide parties_inner mob_remove" @click="resetPartiesListingState">
            <router-link class="side-menu__item new-active-class" to="/parties">
                <img src="/assets/images/1.0/svgs/sidebar-black/suitcase.svg"
                    class="img-fluid side-menu__icon sidebar_unfill_icon" />
                <img src="/assets/images/1.0/svgs/sidebar-black/suitcase-active.svg"
                    class="img-fluid side-menu__icon sidebar_fill_icon" />
                <!-- <img src="/assets/images/1.0/icons/purchase (1).png" class="img-fluid side-menu__icon sidebar_fill_icon" /> -->
                <img src="/assets/images/1.0/svgs/suitcase-mobile-active.svg"
                    class="img-fluid side-menu__icon sidebar_mobile_fill_active" />
                <span class="side-menu__label">Parties</span>
            </router-link>
        </li>
        <li class="slide items_inner mob_remove" @click="resetItemsListingState">
            <router-link class="side-menu__item new-active-class" to="/items">
                <img src="/assets/images/1.0/svgs/sidebar-black/items.svg"
                    class="img-fluid side-menu__icon sidebar_unfill_icon" />
                <img src="/assets/images/1.0/svgs/sidebar-black/items-active.svg"
                    class="img-fluid side-menu__icon sidebar_fill_icon" />
                <!-- <img src="assets/images/1.0/icons/item-2.png"
                        class="img-fluid side-menu__icon sidebar_fill_icon" />    -->
                <img src="/assets/images/1.0/svgs/items-mobile-active.svg"
                    class="img-fluid side-menu__icon sidebar_mobile_fill_active" />
                <span class="side-menu__label">Items</span>
            </router-link>
        </li>

        <li class="slide submenu_menu" @click="ResetReportsStates">

            <router-link class="side-menu__item new-active-class" to="/reports">
                <img src="/assets/images/1.0/svgs/sidebar-black/reports.svg"
                    class="img-fluid side-menu__icon sidebar_unfill_icon" />
                <img src="/assets/images/1.0/svgs/sidebar-black/reports-active.svg"
                    class="img-fluid side-menu__icon sidebar_fill_icon" />
                <!-- <img src="assets/images/1.0/icons/report.png"
                        class="img-fluid side-menu__icon sidebar_fill_icon" />    -->
                <img src="/assets/images/1.0/svgs/reports-mobile-active.svg"
                    class="img-fluid side-menu__icon sidebar_mobile_fill_active" />
                <span class="side-menu__label">Reports
                    <!-- <img src="/assets/images/1.0/reports/padlock-red.png"
                            class="lock-sidebar-image" /> -->
                </span>

            </router-link>

        </li>
        <li class="slide submenu_menu">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void(0);">
                <img src="/assets/images/1.0/reports/newimage/myentries.png"
                    class="img-fluid side-menu__icon sidebar_unfill_icon" />
                <img src="/assets/images/1.0/svgs/sidebar-black/sales-active.svg"
                    class="img-fluid side-menu__icon sidebar_fill_icon" />
                <!-- <img src="/assets/images/1.0/icons/sales-unfill (1).png" class="img-fluid side-menu__icon sidebar_unfill_icon" />
                            <img src="/assets/images/1.0/icons/sales-fill.png" class="img-fluid side-menu__icon sidebar_fill_icon" /> -->
                <img src="/assets/images/1.0/svgs/sales-mobile-active.svg"
                    class="img-fluid side-menu__icon sidebar_mobile_fill_active" />
                <span class="side-menu__label">My Entries</span>
                <i class="angle fa fa-chevron-right right_arrow_sidebar"></i>
            </a>
            <ul class="slide-menu slide_custom_menu">
                <li v-if="isPaid == '' || isPaid == null" class=" mob_remove" v-b-modal.customerstatus-popup>
                    <a href="javascript:void(0);" class="slide-item">My Vouchers <span> <img
                                src="/assets/images/1.0/brand/crown-color.svg"
                                class="new_lock_white_sidebar" /></span></a>
                </li>
                <li v-else-if="this.myVouchers == true" class=" mob_remove">
                    <router-link class="slide-item" to="/my-vouchers" @click.native="Sidebar_MyEnteries_my_vouchers">My Vouchers</router-link>

                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">My Vouchers <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>

                </li>
                <li v-if="JSON.parse(this.isRead_isQuotation) == true || JSON.parse(this.isWrite_isQuotation) == true" class=" mob_remove">
                    <router-link class="slide-item" to="/my-quotations"  @click.native="Sidebar_MyEnteries_my_quotations">My Quotations
                    </router-link>

                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">My Quotations <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>

                </li>

                <li v-if="isPaid == '' || isPaid == null" class=" mob_remove" v-b-modal.customerstatus-popup>
                    <a href="javascript:void(0);" class="slide-item">My eWay Bills <span> <img
                                src="/assets/images/1.0/brand/crown-color.svg"
                                class="new_lock_white_sidebar" /></span></a>
                </li>
                <li v-else-if="eWayInvoiceStatus" class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item" @click="handleAddOnNavigation">My eWay Bills<span> <img
                                src="/assets/images/1.0/brand/crown-color.svg"
                                class="new_lock_white_sidebar" /></span></a>
                </li>
                <li v-else-if="JSON.parse(this.ewayReadPermission) == true" class=" mob_remove">
                    <router-link class="slide-item" to="/my-eway-bill" @click.native="Sidebar_MyEnteries_my_eway_bills"> My eWay Bills </router-link>
                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">My eWay Bills <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>
                </li>

                <li v-if="isPaid == '' || isPaid == null" class=" mob_remove" v-b-modal.customerstatus-popup>
                    <a href="javascript:void(0);" class="slide-item">My eInvoices<span> <img
                                src="/assets/images/1.0/brand/crown-color.svg"
                                class="new_lock_white_sidebar" /></span></a>
                </li>
                <li v-else-if="eWayInvoiceStatus" class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item" @click="handleAddOnNavigation">My eInvoices<span> <img
                                src="/assets/images/1.0/brand/crown-color.svg"
                                class="new_lock_white_sidebar" /></span></a>
                </li>
                <li v-else-if="JSON.parse(this.eInvoiceReadPermission) == true" class=" mob_remove">
                    <router-link class="slide-item" to="/my-einvoices" @click.native="Sidebar_MyEnteries_my_einvoices"> My eInvoices
                    </router-link>
                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">My eInvoices <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>

                </li>

                <li v-if="isPaid == '' || isPaid == null" class=" mob_remove" v-b-modal.customerstatus-popup>
                    <a href="javascript:void(0);" class="slide-item">My Parties<span> <img
                                src="/assets/images/1.0/brand/crown-color.svg"
                                class="new_lock_white_sidebar" /></span></a>
                </li>
                <li v-else-if="JSON.parse(this.isRead_isLedger) == true" class=" mob_remove">
                    <router-link class="slide-item" to="/my-ledgers"  @click.native="Sidebar_MyEnteries_my_ledgers">My Parties</router-link>
                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">My Parties <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>

                </li>

                <li v-if="isPaid == '' || isPaid == null" class=" mob_remove" v-b-modal.customerstatus-popup>
                    <a href="javascript:void(0);" class="slide-item">My Stock Items<span> <img
                                src="/assets/images/1.0/brand/crown-color.svg"
                                class="new_lock_white_sidebar" /></span></a>
                </li>
                <li v-else-if="JSON.parse(this.isRead_isStockItem) == true" class=" mob_remove">
                    <router-link class="slide-item" to="/my-stock-items"  @click.native="Sidebar_MyEnteries_my_stock_items">My Stock Items</router-link>
                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">My Stock Items <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>

                </li>

                <li v-if="isPaid == '' || isPaid == null" class=" mob_remove" v-b-modal.customerstatus-popup>
                    <a href="javascript:void(0);" class="slide-item">Tracking Report<span> <img
                                src="/assets/images/1.0/brand/crown-color.svg"
                                class="new_lock_white_sidebar" /></span></a>
                </li>
                <li v-else-if="this.parentUserId == false" class=" mob_remove">
                    <router-link class="slide-item" to="/tracking-report" @click.native="Sidebar_MyEnteries_tracking_report">Tracking Report</router-link>
                </li>
                <li v-else class=" mob_remove">
                    <a href="javascript:void(0);" class="slide-item">Tracking Report <span> <img
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                class="new_lock_white_sidebar" /></span></a>

                </li>
            </ul>
        </li>
        <li class="slide submenu_menu" v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
            <a href="javascript:void(0);" class="side-menu__item">
                <img src="/assets/images/1.0/svgs/sidebar-black/configuration.png"
                    class="img-fluid side-menu__icon sidebar_unfill_icon" />
                <img src="/assets/images/1.0/svgs/sidebar-black/configuration-active.svg"
                    class="img-fluid side-menu__icon sidebar_fill_icon" />
                <img src="/assets/images/1.0/svgs/suitcase-mobile-active.svg"
                    class="img-fluid side-menu__icon sidebar_mobile_fill_active" />
                <span> <img src="/assets/images/1.0/brand/crown-color.svg" class="new_lock_white_sidebar"
                        loading="lazy" /></span>
                <span class="side-menu__label"> Configurations</span>
            </a>
        </li>
        <li v-else-if="_parentUserId && customerId != _parentUserId" class="slide submenu_menu">
            <a href="javascript:void(0);" class="side-menu__item">
                <img src="/assets/images/1.0/svgs/sidebar-black/configuration.png"
                    class="img-fluid side-menu__icon sidebar_unfill_icon" />
                <img src="/assets/images/1.0/svgs/sidebar-black/configuration-active.svg"
                    class="img-fluid side-menu__icon sidebar_fill_icon" />
                <img src="/assets/images/1.0/svgs/suitcase-mobile-active.svg"
                    class="img-fluid side-menu__icon sidebar_mobile_fill_active" />
                <span class=""><img src="/assets/images/1.0/dashboard/lock-red.png"
                        class="img-fluid new_lock_white_sidebar" /></span>
                <span class="side-menu__label"> Configurations</span>
            </a>
        </li>

        <li v-else class="slide parties_inner mob_remove">
            <router-link class="side-menu__item new-active-class" to="/configurations">
                <img src="/assets/images/1.0/svgs/sidebar-black/configuration.png"
                    class="img-fluid side-menu__icon sidebar_unfill_icon" />
                <img src="/assets/images/1.0/svgs/sidebar-black/configuration-active.svg"
                    class="img-fluid side-menu__icon sidebar_fill_icon" />
                <img src="/assets/images/1.0/svgs/suitcase-mobile-active.svg"
                    class="img-fluid side-menu__icon sidebar_mobile_fill_active" />
                <span class="side-menu__label">Configurations</span>
            </router-link>
        </li>
        <!-- <li v-if="(this.userName == '' && this.Password == '') && this.parentUserId =='' && addOnsStatus.includes('EWAY_EINVOICE')" class="slide parties_inner mob_remove">
            <router-link class="side-menu__item new-active-class" to="/gsplogin">
                <img src="/assets/images/1.0/svgs/sidebar-black/configuration.png"
                    class="img-fluid side-menu__icon sidebar_unfill_icon" />
                <img src="/assets/images/1.0/svgs/sidebar-black/configuration-active.svg"
                    class="img-fluid side-menu__icon sidebar_fill_icon" />
                <img src="/assets/images/1.0/svgs/suitcase-mobile-active.svg"
                    class="img-fluid side-menu__icon sidebar_mobile_fill_active" />
                <span class="side-menu__label">GSP Login</span>
            </router-link>
        </li> -->
        <div v-if="this.source != 'sf'">
            <li class="slide submenu_menu" v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
                <a href="javascript:void(0);" class="side-menu__item">
                    <img src="/assets/images/1.0/svgs/sidebar-black/tally-data-backup.svg"
                        class="img-fluid side-menu__icon sidebar_unfill_icon" />
                    <img src="/assets/images/1.0/svgs/sidebar-black/tally-data-backup-active.svg"
                        class="img-fluid side-menu__icon sidebar_fill_icon" />
                    <img src="/assets/images/1.0/svgs/suitcase-mobile-active.svg"
                        class="img-fluid side-menu__icon sidebar_mobile_fill_active" />
                    <span> <img src="/assets/images/1.0/brand/crown-color.svg" class="new_lock_white_sidebar"
                            loading="lazy" /></span>
                    <span class="side-menu__label"> Tally Data Backup</span>
                </a>
            </li>
            <li v-else-if="_parentUserId && customerId != _parentUserId" class="slide submenu_menu">
                <a href="javascript:void(0);" class="side-menu__item">
                    <img src="/assets/images/1.0/svgs/sidebar-black/tally-data-backup.svg"
                        class="img-fluid side-menu__icon sidebar_unfill_icon" />
                    <img src="/assets/images/1.0/svgs/sidebar-black/tally-data-backup-active.svg"
                        class="img-fluid side-menu__icon sidebar_fill_icon" />
                    <img src="/assets/images/1.0/svgs/suitcase-mobile-active.svg"
                        class="img-fluid side-menu__icon sidebar_mobile_fill_active" />
                    <span class=""><img src="/assets/images/1.0/dashboard/lock-red.png"
                            class="img-fluid new_lock_white_sidebar" /></span>
                    <span class="side-menu__label"> Tally Data Backup</span>
                </a>
            </li>
            <li v-else class="slide parties_inner mob_remove">
                <router-link class="side-menu__item new-active-class" to="/tallydatabackup">
                    <img src="/assets/images/1.0/svgs/sidebar-black/tally-data-backup.svg"
                        class="img-fluid side-menu__icon sidebar_unfill_icon" />
                    <img src="/assets/images/1.0/svgs/sidebar-black/tally-data-backup-active.svg"
                        class="img-fluid side-menu__icon sidebar_fill_icon" />
                    <span class="side-menu__label">Tally Data Backup</span>
                </router-link>
            </li>

        </div>


        </ul>
        <div class="SupportNumberWeb1Icon">
            <li class="slide items_inner">
                <a href="tel:+918383838383" class="side-menu__item">
                    <i class="fa fa-phone"></i>
                    <span class="side-menu__label">+91 8383838383</span>
                </a>
            </li>
        </div>

        <b-modal id="link_popup_sidebar" class="vch_type_popup_body" size="md" title="Voucher Type" hide-footer>
            <div class="modal-content email_modal_content tx-size-sm">
                <div class="modal-body top_modal_body p-0 hg_popup">
                    <div class="email_modal_body">
                        <ul class="vch_type_list">
                            <router-link :to="`${type.url}`" class="" v-for="(type, index) in array_type" :key="index"
                                @click.native="refreshIfSameRoute">
                                <li
                                    @click="$bvModal.hide('link_popup_sidebar'), get_id(type.id), getVoucherType(type.voucherNumberSeriesList)">
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
    </aside>
</template>

<script>
import Api from "@/Api";
import { version } from "../../package.json";
import GoogleAnalytics from "@/GoogleAnalytics";
import Common from "@/Common";
export default {
    data() {
        this.loading = false;
        return {
            parentUserId: localStorage.getItem("_parentUserId"),
            userName: '',
            Password: '',
            payment_url: "",
            isRead_isCreditNote: true,
            isRead_isDebitNote: true,
            isRead_isSales: true,
            isRead_isOutstandingReceivable: true,
            isRead_isReceipt: true,
            isRead_isPurchase: true,
            isRead_isOutstandingPayable: true,
            isRead_isPayment: true,
            isRead_isBank: true,
            isRead_isCash: true,
            isRead_isSalesOrder: true,
            isRead_isPurchaseOrder: true,
            isRead_isQuotation: true,
            isRead_isLedger: true,
            isRead_isStockItem: true,
            isRead_isJournal:true,
            isRead_isContra:true,
            isChecker:true,
            isMaker:true,
            myVouchers: true,
            ewayReadPermission: true,
            eInvoiceReadPermission: true,
            isBalanceSheet: true,
            isProfitLoss: true,
            isTrialBalance: true,
            isPaid: "",
            version: "",
            showvchtype: false,
            isAdmin: true,
            parentCustomerId: "",
            companytype_value: "",
            _parentUserId: "",
            customerId: "",
            isRead_isPurchaseOrder: true,
            source: "",
            showCreateVoucher: true,
            isWrite_isQuotation: true,
            isWrite_isSales: true,
            isWrite_isReceipt: true,
            isWrite_isSalesOrder: true,
            isWrite_isCreditNote: true,
            isWrite_isPurchase: true,
            isWrite_isPurchaseOrder: true,
            isWrite_isDebitNote: true,
            isWrite_isPayment: true,
            isWrite_isJournal: true,
            isWrite_isContra: true,
            eWayInvoiceStatus: false,
            payURL: process.env.VUE_APP_PAY_URL,
            array_type: [],
            isActive: false,
        };
    },
    created() {

        this.updateLocalStorageValues();
        window.addEventListener('storageChanged', () => {
            this.updateLocalStorageValues();
            this.showCreateVoucher = true;
            this.isWrite_isSales = JSON.parse(
                localStorage.getItem("isWrite_isSales")
            );
            this.isWrite_isReceipt = JSON.parse(
                localStorage.getItem("isWrite_isReceipt")
            );
            this.isWrite_isSalesOrder = JSON.parse(
                localStorage.getItem("isWrite_isSalesOrder")
            );
            this.isWrite_isCreditNote = JSON.parse(
                localStorage.getItem("isWrite_isCreditNote")
            );
            this.isWrite_isPurchase = JSON.parse(
                localStorage.getItem("isWrite_isPurchase")
            );
            this.isWrite_isPurchaseOrder = JSON.parse(
                localStorage.getItem("isWrite_isPurchaseOrder")
            );
            this.isWrite_isDebitNote = JSON.parse(
                localStorage.getItem("isWrite_isDebitNote")
            );
            this.isWrite_isPayment = JSON.parse(
                localStorage.getItem("isWrite_isPayment")
            );
            this.isWrite_isJournal = JSON.parse(
                localStorage.getItem("isWrite_isJournal")
            );
            this.isWrite_isContra = JSON.parse(
                localStorage.getItem("isWrite_isContra")
            );
            this.isWrite_isQuotation = JSON.parse(
                localStorage.getItem("isWrite_isQuotation")
            );

            if (
                !this.isWrite_isSales &&
                !this.isWrite_isReceipt &&
                !this.isWrite_isSalesOrder &&
                !this.isWrite_isCreditNote &&
                !this.isWrite_isPurchase &&
                !this.isWrite_isPurchaseOrder &&
                !this.isWrite_isDebitNote &&
                !this.isWrite_isPayment &&
                !this.isWrite_isJournal &&
                !this.isWrite_isContra &&
                !this.isWrite_isQuotation
            ) {
                this.showCreateVoucher = false;
            }
        });


    },
    computed: {
        addOnsStatus() {
            const status = localStorage.getItem('EWAY_EINVOICE_STATUS');
            return status ? JSON.parse(status) : [];
        }
    },
    watch: {
        '$route.path': 'checkActiveState'
    },
    methods: {
        handleAddOnNavigation() {
          if (this.eWayInvoiceStatus) {
            const customerMobile = localStorage.getItem("customermobile");
            window.open(`${this.payURL}/${customerMobile}?e=1`, '_blank');
          }
        },
        getGspSearchFunction() {
            this.loading = true

            const data = {
                company_id: localStorage.getItem("companyId"),
                _userId: localStorage.getItem("customerId"),
                gstIn: localStorage.getItem("companyGstNumber"),
                requestFrom: "WEB",
                isStaging: false
            }
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                token: localStorage.getItem("webAuthToken"),
            };
            Api.getGspSearch(data, headers)
                .then((response) => {
                    const responseData = Common.getStatusForActionFailed(
                        response.data.status
                    );
                    if (responseData == "200") {

                        this.userName = response.data.data.gspUserName
                        this.Password = response.data.data.gspPassword
                        this.eInvoiceStatusValue = response.data.data.eInvoiceStatus
                    }
                    this.loading = false

                })
                .catch((error) => {
                    this.loading = false
                    Common.getStatusForActionFailed(err.response.status)
                })
        },
        refreshIfSameRoute(event) {
           event.preventDefault();
           this.$router.go(0);
        },
        checkActiveState() {
            const paths = [
                '/create-quotation-v4',
                '/sales-voucher-v4/',
                '/create-receipt/',
                '/create-payment',
                '/sales-order-voucher-V4',
                '/purchase-voucher-v4',
                '/create-journal',
                '/create-contra',
                '/purchase-order-voucher-v4',
                '/create-creditnote-v4',
                '/create-debit-note-v4',
            ];
            const currentPath = window.location.pathname;
            this.isActive = paths.some(path => currentPath.includes(path));
        },
        Sidebar_Quotation() {
            GoogleAnalytics.Sidebar_Quotation_event();
        },
        Sidebar_Sales() {
            GoogleAnalytics.Sidebar_Sales_event();
        },
        Sidebar_Receipt() {
            GoogleAnalytics.Sidebar_Receipt_event();
        },
        Sidebar_Salesorder() {
            GoogleAnalytics.Sidebar_Salesorder_event();
        },
        Sidebar_Creditnote() {
            GoogleAnalytics.Sidebar_Creditnote_event();
        },
        Sidebar_Purchase() {
            GoogleAnalytics.Sidebar_Purchase_event();
        },
        Sidebar_Purchaseorder() {
            GoogleAnalytics.Sidebar_Purchaseorder_event();
        },
        Sidebar_Debitnote() {
            GoogleAnalytics.Sidebar_Debitnote_event();
        },
        Sidebar_Payment() {
            GoogleAnalytics.Sidebar_Payment_event();
        },
        Sidebar_Journal() {
            GoogleAnalytics.Sidebar_Journal_event();
        },
        Sidebar_Contra() {
            GoogleAnalytics.Sidebar_Contra_event();
        },


        Sidebar_MyEnteries_my_vouchers() {
            GoogleAnalytics.sidebar_my_entries_my_vouchers();
        },
        Sidebar_MyEnteries_my_quotations() {
            GoogleAnalytics.sidebar_my_entries_my_quotations();
        },
        Sidebar_MyEnteries_my_eway_bills() {
            GoogleAnalytics.sidebar_my_entries_my_eway_bills();
        },
        Sidebar_MyEnteries_my_einvoices() {
            GoogleAnalytics.sidebar_my_entries_my_einvoices();
        },
        Sidebar_MyEnteries_my_ledgers() {
            GoogleAnalytics.sidebar_my_entries_my_ledgers();
        },
        Sidebar_MyEnteries_my_stock_items() {
            GoogleAnalytics.sidebar_my_entries_my_stock_items();
        },
        Sidebar_MyEnteries_tracking_report() {
            GoogleAnalytics.sidebar_my_entries_tracking_report();
        },

        get_id(id) {
            localStorage.setItem("VoucherTypesId", id)
        },
        getVoucherType(type) {

            for (let [key, value] of Object.entries(type)) {
                localStorage.setItem('voucherType', value.numberingMethod)
            }
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
                                "/sales-voucher-v4" +
                                "/" +
                                response.data.data.list[key].voucherTypeName;
                        }
                        if (event === "Quotation") {
                            response.data.data.list[key].url =
                                "/create-quotation-v4" +
                                "/" +
                                response.data.data.list[key].voucherTypeName;
                        }
                        if (event === "Receipt") {
                            response.data.data.list[key].url =
                                "/create-receipt" +
                                "/" +
                                response.data.data.list[key].voucherTypeName;
                        }
                        if (event === "Sales Order") {
                            response.data.data.list[key].url =
                                "/sales-order-voucher-V4" +
                                "/" +
                                response.data.data.list[key].voucherTypeName;
                        }
                        if (event === "Credit Note") {
                            response.data.data.list[key].url =
                                "/create-creditnote-v4" +
                                "/" +
                                response.data.data.list[key].voucherTypeName;
                        }
                        if (event === "Purchase") {
                            response.data.data.list[key].url =
                                "/purchase-voucher-v4" +
                                "/" +
                                response.data.data.list[key].voucherTypeName;
                        }
                        if (event === "Purchase Order") {
                            response.data.data.list[key].url =
                                "/purchase-order-voucher-v4" +
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
                                "/create-debit-note-v4" +
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
        logout() {
            localStorage.clear();
            window.location.href = '/';
        },
        resetPartiesListingState() {
            this.$store.dispatch('Web1_Store/resetPartiesListingState');
        },
        resetSalesStates() {
            this.$store.dispatch('Web1_Store/resetSalesState')
        },
        resetItemsListingState() {
            this.$store.dispatch('Web1_Store/resetItemsListingState')
        },
        resetCreditNoteState() {
            this.$store.dispatch('Web1_Store/resetCreditNoteState')

        },
        resetReceiptState() {
            this.$store.dispatch('Web1_Store/resetReceiptState')

        },
        ResetReceivableStates() {
            this.$store.dispatch('Web1_Store/resetOnAccountState')
            this.$store.dispatch('Web1_Store/resetSalesReceivableState')

        },
        ResetSalesOrderStates() {
            this.$store.dispatch('Web1_Store/resetSalesSalesOrderState')

        },
        ResetPurchaseStates() {
            this.$store.dispatch('Web1_Store/resetPurchaseState')

        },
        ResetDebitNoteStates() {
            this.$store.dispatch('Web1_Store/resetDebitNoteState')

        },
        ResetPaymentStates() {
            this.$store.dispatch('Web1_Store/resetPaymentState')

        },
        ResetPurchaseOrderStates() {
            this.$store.dispatch('Web1_Store/resetPurchaseOrderState')

        },
        ResetPayablesStates() {
            console.log('called payables')
            this.$store.dispatch('Web1_Store/resetOnAccountState')
            this.$store.dispatch('Web1_Store/resetPayablesState')

        },
        ResetReportsStates() {
            GoogleAnalytics.sidebar_reports();
            this.$store.dispatch('Web1_Store/resetReportsState')

        },
        updateLocalStorageValues() {
            this.isAdmin = localStorage.getItem('isAdmin');

            this.isRead_isSales = localStorage.getItem('isRead_isSales');
            this.isRead_isDebitNote = localStorage.getItem('isRead_isDebitNote')
            this.isRead_isCreditNote = localStorage.getItem('isRead_isCreditNote')
            this.isRead_isOutstandingReceivable = localStorage.getItem('isRead_isOutstandingReceivable');
            this.isRead_isReceipt = localStorage.getItem('isRead_isReceipt');
            this.isRead_isPurchase = localStorage.getItem('isRead_isPurchase');
            this.isRead_isPurchaseOrder = localStorage.getItem('isRead_isPurchaseOrder')
            this.isRead_isOutstandingPayable = localStorage.getItem('isRead_isOutstandingPayable');
            this.isRead_isPayment = localStorage.getItem('isRead_isPayment');
            this.isRead_isBank = localStorage.getItem('isRead_isBank');
            this.isRead_isCash = localStorage.getItem('isRead_isCash');
            this.isRead_isSalesOrder = localStorage.getItem('isRead_isSalesOrder');
            this.isRead_isPurchaseOrder = localStorage.getItem('isRead_isPurchaseOrder');
            this.isRead_isQuotation = localStorage.getItem('isRead_isQuotation');
            this.ewayReadPermission = localStorage.getItem('isEway');
            this.eInvoiceReadPermission = localStorage.getItem('isEInvoice');
            this.isRead_isLedger = localStorage.getItem('isRead_isLedger');
            this.isRead_isStockItem = localStorage.getItem('isRead_isStockItem');
            this.isRead_isJournal = localStorage.getItem("isRead_isJournal");
            this.isRead_isContra = localStorage.getItem("isRead_isContra");
            this.isChecker = localStorage.getItem("isChecker");
            this.isMaker = localStorage.getItem("isMaker");

            this.isBalanceSheet = localStorage.getItem('isBalanceSheet');
            this.isProfitLoss = localStorage.getItem('isProfitLoss');
            this.isTrialBalance = localStorage.getItem('isTrialBalance');

            if (
              this.isRead_isSales == "true" ||
              this.isRead_isOutstandingReceivable == "true" ||
              this.isRead_isPurchase == "true" ||
              this.isRead_isOutstandingPayable == "true" ||
              this.isRead_isCreditNote == "true" ||
              this.isRead_isDebitNote == "true" ||
              this.isRead_isReceipt == "true" ||
              this.isRead_isPayment == "true" ||
              this.isRead_isBank == "true" ||
              this.isRead_isCash == "true" ||
              this.isRead_isSalesOrder == "true" ||
              this.isRead_isPurchaseOrder == "true" ||
              this.isRead_isJournal == "true" ||
              this.isRead_isContra == "true" ||
              this.isRead_isQuotation == "true" ||
              this.isChecker == "true" ||
              this.isMaker == "true"
            ) {
              this.myVouchers = true;
            }
            else {
              this.myVouchers = false;
            }

            setTimeout(() => {
              const ewayInvoice = localStorage.getItem("EWAY_EINVOICE_STATUS");
              if(localStorage.getItem("customerStatus").toLowerCase() == "installation done"){
                this.eWayInvoiceStatus = false;
              }else if(localStorage.getItem("customerStatus").toLowerCase() == "converted"){
                if (ewayInvoice.includes("EWAY_EINVOICE")) {
                this.eWayInvoiceStatus = false;
                }
                else {
                  this.eWayInvoiceStatus = true;
                }
              }
            }, 100);
        },
    },
    mounted() {
        this.version = version;
        setTimeout(() => {
            this.isPaid = localStorage.getItem('isPaid');
        }, 1000);

        this.companytype_value = localStorage.getItem('companytype_value');
        this.source = localStorage.getItem("source");
        this.tallyVersionStatus = localStorage.getItem("tallyVersionStatus");
        if (this.tallyVersionStatus == "1") {
            this.source = "sf";
        }
        this.parentCustomerId = localStorage.getItem('parentCustomerId');
        this._parentUserId = localStorage.getItem('_parentUserId');
        this.customerId = localStorage.getItem('customerId');
        var scriptTag1 = document.createElement("script");
        scriptTag1.setAttribute('src', '/assets/plugins/sidemenu/sidemenu.js');
        scriptTag1.async = true;
        scriptTag1.defer = true;
        document.getElementsByTagName('head')[0].appendChild(scriptTag1);
        this.checkActiveState();
        if (this.parentUserId === '' && this.addOnsStatus.includes('EWAY_EINVOICE')) {
            setTimeout(() => {
                // this.getGspSearchFunction();
            }, 1000); // Delay by 1 second, adjust as needed
        }

    }
};

</script>