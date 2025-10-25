/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section>
    <div class="">
      <div class="row">
        <div class="col-12">
          <div class="NewBlueRenewalBannerDesignWithTimer" v-if="showBannerType === 'timer'">
            <span class="ClockIconBannerRenealRight">
              <img src="/assets/images/1.0/png/clockIcon.png" />
            </span>
            <div class="row">
              <div class="col-xl-6 col-12">
                <div class="RenewalBannerDiscountOffWithTimer">
                  <div class="CrownIconRenewalBannerPlansEndsWithTimer">
                    <img src="/assets/images/1.0/png/CrownIconBg.png" />
                  </div>
                  <div class="WithTimerRenewTodayOffTextAmount">
                    <p>Renew Today @ 10% Off</p>
                    <h4><span class=font_sans>₹</span> 2,700</h4>
                    <h6><span class="font_sans">₹</span> 3,000</h6>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-12">
                <div class="WithOriginalTimePartDiv">
                  <div class="WithTimerTopDivPart">
                    <div class="WithTimerDaysHoursMinsSecond">
                      <h4>{{ timerdays }}</h4>
                      <p class="">DAYS</p>
                    </div>
                    <span>:</span>
                    <div class="WithTimerDaysHoursMinsSecond">
                      <h4>{{ timerhours }}</h4>
                      <p class="">HOURS</p>
                    </div>
                    <span>:</span>
                    <div class="WithTimerDaysHoursMinsSecond">
                      <h4>{{ timerminutes }}</h4>
                      <p class="">MIN</p>
                    </div>
                    <span>:</span>
                    <div class="WithTimerDaysHoursMinsSecond">
                      <h4>{{ timerseconds }}</h4>
                      <p class="">SEC</p>
                    </div>
                  </div>
                </div>
                <div class="WithTimeClaimNowButtonRenewal">
                  <button @click="handleAddOnNavigation">Claim Now <i class="fa fa-chevron-right"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div class="NewBlueRenewalBannerDesign" v-else-if="showBannerType === 'discount'">
            <span class="ClockIconBannerRenealRight">
              <img src="/assets/images/1.0/png/clockIcon.png" />
            </span>
            <div class="row">
              <div class="col-xl-3 col-12">
                <div class="CrownIconRenewalBannerPlansEnds">
                  <img src="/assets/images/1.0/png/CrownIconBg.png" />
                  <span v-if="totalDaysLeft > 0">Plan ends in {{ totalDaysLeft }} days</span>
                  <span v-else>Plan Expired</span>
                </div>
              </div>
              <div class="col-xl-6 col-12">
                <div class="WithoutTimerRenewTodayOffTextAmount">
                  <p>Renew Today, Get 10% Off</p>
                  <h4><span class=font_sans>₹</span> 2,700</h4>
                  <h6><span class="font_sans">₹</span> 3,000</h6>
                </div>
              </div>
              <div class="col-xl-3 col-12">
                <div class="WithoutTimeClaimNowButtonRenewal">
                  <button @click="handleAddOnNavigation">Claim Offer <i class="fa fa-chevron-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <PwaInstallButton /> -->
    <div class="container" v-if="showBannerType !== 'timer' && showBannerType !== 'discount'">
      <div class="row">
        <div class="col-12">
          <div v-if="totalDaysLeft <= 10 && totalDaysLeft >= 1 && customerStatusCheck"
            class="SubscriptionEndDiv SubscriptionCurrent d-flex align-items-center justify-content-center p-2 mt-2 mb-2 ms-2 me-2 text-center">
            <h6 class="mb-0"><img src="/assets/images/1.0/png/infosubscription.png" class="me-3" /> Plan ends in
              <span> {{ totalDaysLeft }} {{ totalDaysLeft == 1 ? 'day' : 'days' }}</span>
            </h6>
            <a target="_blank" :href="dynamicUrl" class="pt-1 pb-1 pe-3 ps-3 ms-3 d-flex align-items-center">RENEW NOW
              <img src="/assets/images/1.0/png/orangecrown.png" class="ms-2" /></a>
          </div>
          <!-- <div v-if="totalDaysLeft == 1 && customerStatusCheck" class="SubscriptionEndDiv SubscriptionCurrent d-flex align-items-center justify-content-center p-2 mt-2 mb-2 ms-2 me-2 text-center">
            <h6 class="mb-0"><img src="/assets/images/1.0/png/infosubscription.png" class="me-3" />Plan ends <span>Tomorrow</span></h6>
            <a target="_blank" :href="dynamicUrl" class="pt-1 pb-1 pe-3 ps-3 ms-3 d-flex align-items-center">RENEW NOW <img
                src="/assets/images/1.0/png/orangecrown.png" class="ms-2" /></a>
          </div> -->
          <div v-if="totalDaysLeft > 10 && totalDaysLeft <= 30 && customerStatusCheck"
            class="SubscriptionEndDiv SubscriptionCurrent d-flex align-items-center justify-content-center p-2 mt-2 mb-2 ms-2 me-2 text-center">
            <h6 class="mb-0"><img src="/assets/images/1.0/png/infosubscription.png" class="me-3" /> Plan ends This
              <span>Month</span></h6>
            <a target="_blank" :href="dynamicUrl" class="pt-1 pb-1 pe-3 ps-3 ms-3 d-flex align-items-center">RENEW NOW
              <img src="/assets/images/1.0/png/orangecrown.png" class="ms-2" /></a>
          </div>
          <div v-if="totalDaysLeft == 0 && customerStatusCheck"
            class="SubscriptionEndDiv SubscriptionCurrent d-flex align-items-center justify-content-center p-2 mt-2 mb-2 ms-2 me-2 text-center">
            <h6 class="mb-0"><img src="/assets/images/1.0/png/infosubscription.png" class="me-3" />Plan ends in a
              <span>day</span>
            </h6>
            <a target="_blank" :href="dynamicUrl" class="pt-1 pb-1 pe-3 ps-3 ms-3 d-flex align-items-center">RENEW NOW
              <img src="/assets/images/1.0/png/orangecrown.png" class="ms-2" /></a>
          </div>
          <div v-if="totalDaysLeft < 0 && customerStatusCheck"
            class="SubscriptionEndDiv SubscriptionExpired d-flex align-items-center justify-content-center p-2 mt-2 mb-2 ms-2 me-2 text-center">
            <h6 class="mb-0"><img src="/assets/images/1.0/png/infosubscription.png" class="me-3" />Plan has expired!
              <span></span>
            </h6>
            <a target="_blank" :href="dynamicUrl" class="pt-1 pb-1 pe-3 ps-3 ms-3 d-flex align-items-center">RENEW NOW
              <img src="/assets/images/1.0/png/orangecrown.png" class="ms-2" /></a>
          </div>
          <div v-if="totalDaysLeft < 0 && customerStatusCheckForTrial"
            class="SubscriptionEndDiv SubscriptionExpired d-flex align-items-center justify-content-center p-2 mt-2 mb-2 ms-2 me-2 text-center">
            <h6 class="mb-0"><img src="/assets/images/1.0/png/infosubscription.png" class="me-3" />Trial has
              expired!<span></span></h6>
            <a target="_blank" :href="dynamicUrl" class="pt-1 pb-1 pe-3 ps-3 ms-3 d-flex align-items-center">PURCHASE
              NOW <img src="/assets/images/1.0/png/orangecrown.png" class="ms-2" /></a>
          </div>
        </div>
      </div>
    </div>

    <div class="new-dashboard-tabs">

      <div class="inner-tab-content">
        <div class="tab-content new-dashboard-tabs">
          <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6 col-12 mb-2">
                  <div class="summary-box">
                    <div class="new-box-title clearfix">
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-12">
                          <div class="new-box-heading-left">
                            <h5>Summary</h5>
                          </div>
                        </div>
                        <div class="col-lg-6 col-12">
                          <div class="new-box-right-caption">
                            <div>

                              <select name="" id="" v-model="selectedRangeForSummary"
                                @change="handleRangeChange('summary')">
                                <option v-for="(range, label) in summaryfiscals" :key="label">
                                  {{ formatRange(label, range) }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="new-box-field-summary">
                      <div class="row">
                        <div class="col-lg-6 col-12" v-if="JSON.parse(this.isRead_isCash) == true">

                          <router-link :to="{ name: 'cash' }">
                            <div class="new-box-field-inner">
                              <p>Cash</p>
                              <h6>
                                <span class="font_sans">{{ symbol }}</span>
                                {{
                                manageNan(cashAmount) | formatNumberDashboard
                                }}
                              </h6>
                              <div v-if="cash_show">
                                <router-link :to="{ name: 'cash' }" class="">
                                  <span class="right-arrow-new-dashboard"><i
                                      class="fa fa-chevron-right"></i></span></router-link>
                              </div>
                            </div>
                          </router-link>
                        </div>
                        <div class="col-lg-6 col-12" v-else>
                          <div class="new-box-field-inner">
                            <p>Cash</p>
                            <h6>
                              <p>
                                <img src="/assets/images/1.0/dashboard/lock-red.png" class="new_lock_white_sidebar" />
                              </p>
                            </h6>
                          </div>
                        </div>
                        <div class="col-lg-6 col-12" v-if="JSON.parse(this.isRead_isBank) == true">
                          <router-link :to="{ name: 'bank' }">
                            <div class="new-box-field-inner border-right-none">
                              <p>Bank</p>
                              <h6>
                                <span class="font_sans">{{ symbol }}</span>
                                {{
                                manageNan(bankAmount) | formatNumberDashboard
                                }}
                              </h6>
                              <div v-if="bank_show">
                                <router-link :to="{ name: 'bank' }" class="">
                                  <span class="right-arrow-new-dashboard"><i
                                      class="fa fa-chevron-right"></i></span></router-link>
                              </div>
                            </div>
                          </router-link>
                        </div>
                        <div class="col-lg-6 col-12" v-else>
                          <div class="new-box-field-inner">
                            <p>Bank</p>
                            <h6>
                              <p>
                                <img src="/assets/images/1.0/dashboard/lock-red.png" class="new_lock_white_sidebar" />
                              </p>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="new-box-field-summary">
                      <div class="row">
                        <div class="col-lg-6 col-12">
                          <router-link :to="{ name: 'items-listing' }">
                            <div class="new-box-field-inner">
                              <p>Inventory Amount</p>
                              <h6>
                                <span class="font_sans">{{ symbol }} </span>{{
                                Math.abs(manageNan(inventoryTotal))
                                | formatNumberDashboard
                                }}
                                <span v-if="inventoryTotal < 0">Dr</span>
                                <span v-if="inventoryTotal > 0">Cr</span>
                                <span v-else></span>
                              </h6>
                              <div v-if="inventory_show">
                                <router-link :to="{ name: 'items-listing' }" class="">
                                  <span class="right-arrow-new-dashboard"><i
                                      class="fa fa-chevron-right"></i></span></router-link>
                              </div>
                            </div>
                          </router-link>
                        </div>
                        <div class="col-lg-6 col-12" v-if="
                            JSON.parse(this.isRead_isOutstandingPayable) == true
                          ">

                          <router-link :to="{ name: 'dashboard-payables' }">
                            <div class="new-box-field-inner border-right-none">
                              <p>Payables</p>
                              <h6>
                                <span class="font_sans">{{ symbol }}</span>
                                {{
                                manageNan(payablesAmount)
                                | formatNumberDashboard
                                }}
                              </h6>
                              <div v-if="payables_show">
                                <router-link :to="{ name: 'dashboard-payables' }" class="">
                                  <span class="right-arrow-new-dashboard"><i
                                      class="fa fa-chevron-right"></i></span></router-link>
                              </div>
                            </div>
                          </router-link>
                        </div>
                        <div class="col-lg-6 col-12" v-else>
                          <div class="new-box-field-inner">
                            <p>Payables</p>
                            <h6>
                              <p>
                                <img src="/assets/images/1.0/dashboard/lock-red.png" class="new_lock_white_sidebar" />
                              </p>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-12 mb-2">
                  <div class="summary-box summary_attention">
                    <div class="new-box-title bg-light-red clearfix">
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-12">
                          <div class="new-box-heading-left">
                            <h5 class="mt-1">
                              Need Attention
                              <img src="assets/images/1.0/new-dashboard/attention.png" class="img-fluid"
                                loading="lazy" />
                            </h5>
                          </div>
                        </div>
                        <div class="col-lg-6 col-12"></div>
                      </div>
                    </div>
                    <div class="new-box-field-summary">
                      <div class="row">
                        <div class="col-lg-6 col-12">

                          <router-link :to="{ name: 'ExpeInactive Customers' }">
                            <div class="new-box-field-inner">
                              <p class="dark-color-red">Inactive Customers</p>
                              <h6>
                                {{
                                manageNan(totalCustomers) | formatNumberDashboard
                                }}
                              </h6>
                              <span class="right-arrow-new-dashboard"><i class="fa fa-chevron-right"></i></span>
                            </div>
                          </router-link>
                        </div>
                        <div class="col-lg-6 col-12">
                          <router-link :to="{ name: 'Inactive Items' }">
                            <div class="new-box-field-inner border-right-none">
                              <p class="dark-color-red">Inactive Stocks</p>
                              <h6>
                                {{
                                manageNan(totalCount) | formatNumberDashboard
                                }}
                              </h6>
                              <span class="right-arrow-new-dashboard"><i class="fa fa-chevron-right"></i></span>
                            </div>
                          </router-link>
                        </div>
                      </div>
                    </div>

                    <div class="new-box-field-summary">
                      <div class="row">
                        <div class="col-lg-6 col-12" v-if="
                            JSON.parse(this.isRead_isOutstandingReceivable) ==
                              true && this.parentUserId_get == ''
                          ">
                          <router-link :to="{ name: 'manage-reminder' }">
                            <div class="new-box-field-inner">
                              <p class="dark-color-red">Payment Reminders</p>
                              <h6 class="flot_left">
                                {{ manageNan(mobileEmptyCount) }}
                                <span class="content_span">Mobile Missing</span>
                              </h6>
                              <h6>
                                {{ manageNan(emailEmptyCount) }}
                                <span class="content_span">Email Missing</span>
                              </h6>
                              <span class="right-arrow-new-dashboard"><i class="fa fa-chevron-right"></i></span>
                            </div>
                          </router-link>
                        </div>

                        <div class="col-lg-6 col-12" v-else>
                          <router-link :to="{}">
                            <div class="new-box-field-inner">
                              <p class="dark-color-red">
                                Payment Reminders
                                <img src="/assets/images/1.0/dashboard/lock-red.png" class="new_lock_white_sidebar" />
                              </p>
                              <h6 class="flot_left">
                                0

                                <span class="content_span">Mobile Missing</span>
                              </h6>
                              <h6>
                                0

                                <span class="content_span">Email Missing</span>
                              </h6>
                              <span class="right-arrow-new-dashboard"><i class="fa fa-chevron-right"></i></span>
                            </div>
                          </router-link>
                        </div>
                        <div class="col-lg-6 col-12">

                          <div class="new-box-field-inner border-right-none">
                            <p class="dark-color-red">SMS Credits</p>
                            <h6>
                              {{
                              manageNan(pendingBalance)
                              | formatNumberDashboard
                              }}
                            </h6>

                          </div>

                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6 col-12 mb-2">
                  <div class="summary-box">
                    <div class="new-box-title clearfix">
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-12">
                          <div class="new-box-heading-left">
                            <h5>Sales & Receipt</h5>
                          </div>
                        </div>
                        <div class="col-lg-6 col-12">
                          <div class="new-box-right-caption">
                            <select name="" id="" v-model="selectedRangeForRevenueAndCollection"
                              @change="handleRangeChange('revenue')">
                              <option v-for="(range, label) in summaryfiscals" :key="label">
                                {{ formatRange(label, range) }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="new-graph-amount-top">
                      <div class="row">
                        <div class="col-lg-6 col-12">
                          <div class="new-graph-amount-left-right-combo grey-light-bg clearfix">
                            <h6>Total Sales</h6>
                            <p v-if="JSON.parse(this.isRead_isSales) == true">
                              <span class="font_sans">{{ symbol }}</span>
                              {{
                              manageNan(salesTotalAmount)
                              | formatNumberDashboard
                              }}
                            </p>
                            <p v-else>
                              <img src="/assets/images/1.0/dashboard/lock-red.png" class="new_lock_white_sidebar" />
                            </p>
                          </div>
                        </div>
                        <div class="col-lg-6 col-12">
                          <div class="new-graph-amount-left-right-combo grey-light-bg clearfix">
                            <h6>Total Receipt</h6>
                            <p v-if="JSON.parse(this.isRead_isReceipt) == true">
                              <span class="font_sans">{{ symbol }}</span>
                              {{
                              manageNan(receiptTotalAmount)
                              | formatNumberDashboard
                              }}
                            </p>
                            <p v-else>
                              <img src="/assets/images/1.0/dashboard/lock-red.png" class="new_lock_white_sidebar" />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="bar-graph" v-if="!this.lock_salesReceipt_Permission">
                        <RevenueCollection ref="revenuecollectionRef" class="graph_height_set_new"
                          style="height: 220px; margin-top: 30px" :chart-data="chartData" :key="barGraphcomponentKey"
                          :legendLabel="legendLabel"></RevenueCollection>
                      </div>
                      <div class="bar-graph p-5" v-else>
                        <div class="main_only_lock_icon_image">
                          <span><img src="/assets/images/1.0/dashboard/lock-red.png" loading="lazy" /></span>
                        </div>
                      </div>

                      <div class="bottom-revenue-collection">
                        <div class="row">
                          <div class="col-lg-6 col-12">
                            <div class="revenue-collection-monthly text-center">
                              <h5>Sales this Month</h5>
                              <h6 v-if="JSON.parse(this.isRead_isSales) == true">
                                <span class="font_sans">{{ symbol }}</span>
                                {{
                                manageNan(currentMonthSalesTotalAmount)
                                | formatNumberDashboard
                                }}
                              </h6>
                              <h6 v-else>
                                <p>
                                  <img src="/assets/images/1.0/dashboard/lock-red.png" class="new_lock_white_sidebar" />
                                </p>
                              </h6>
                              <p>
                                <span class="percentage-count" :class="{
                                    'low-count': salesDifferencePercent < 0,
                                    'grow-count': salesDifferencePercent >= 0,
                                  }">{{ Math.abs(this.salesDifferencePercent) }} %
                                  <img :src="growArrowForSales" class="img-fluid" loading="lazy" /></span>
                                vs Last Month
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6 col-12">
                            <div class="revenue-collection-monthly text-center border-right-none">
                              <h5>Receipt this Month</h5>
                              <h6 v-if="JSON.parse(this.isRead_isReceipt) == true">
                                <span class="font_sans">{{ symbol }}</span>
                                {{
                                manageNan(currentMonthReceiptTotalAmount)
                                | formatNumberDashboard
                                }}
                              </h6>
                              <h6 v-else>
                                <p>
                                  <img src="/assets/images/1.0/dashboard/lock-red.png" class="new_lock_white_sidebar" />
                                </p>
                              </h6>
                              <p>
                                <span class="percentage-count" :class="{
                                    'low-count': receiptDifferencePercent < 0,
                                    'grow-count': receiptDifferencePercent >= 0,
                                  }">{{ Math.abs(this.receiptDifferencePercent) }}
                                  %
                                  <img :src="growArrowForReceipt" class="img-fluid" loading="lazy" /></span>
                                vs Last Month
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-12 mb-2">
                  <div class="summary-box">
                    <div class="new-box-title clearfix">
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-12">
                          <div class="new-box-heading-left">
                            <h5>Receivables</h5>
                          </div>
                        </div>
                        <div class="col-lg-6 col-12">
                          <div class="new-box-right-caption">

                            <span @click="viewAllEvent()" style="color: #2980b9; cursor: pointer"
                              class="onclick_details" v-if="
                                JSON.parse(
                                  this.isRead_isOutstandingReceivable
                                ) == true
                              ">
                              View All
                            </span>
                            <span style="color: #2980b9; cursor: pointer"
                              class="onclick_details d-flex align-items-center" v-else>
                              View All<img src="/assets/images/1.0/dashboard/lock-red.png" class="span_lock" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="new-graph-amount-top">
                      <div class="row">
                        <div class="col-lg-6 col-12">
                          <div class="new-graph-amount-left-right-combo grey-light-bg clearfix">
                            <h6>Total Overdue</h6>
                            <p v-if="
                                JSON.parse(
                                  this.isRead_isOutstandingReceivable
                                ) == true
                              ">
                              <span class="font_sans">{{ symbol }}</span>
                              {{
                              manageNan(totalOverDue) | formatNumberDashboard
                              }}
                            </p>
                            <p v-else>
                              <img src="/assets/images/1.0/dashboard/lock-red.png" class="new_lock_white_sidebar" />
                            </p>
                          </div>
                        </div>

                      </div>
                      <div class="row align-items-center">
                        <div class="col-lg-8 col-12">
                          <div class="bar-graph" v-if="
                              JSON.parse(this.isRead_isOutstandingReceivable) ==
                              true
                            ">
                            <DoughnutChart ref="DoughnutChartRef" class="graph_height_set_new"
                              style="height: 220px; margin-top: 30px" :chart-data="doughnutChartData"
                              :key="doughnutcomponentKey" :legendLabel="legendLabel"></DoughnutChart>
                          </div>
                          <div class="bar-graph" v-else>
                            <div class="main_only_lock_icon_image">
                              <span><img src="/assets/images/1.0/dashboard/lock-red.png" loading="lazy" /></span>
                            </div>
                          </div>
                        </div>
                        <div v-if="
                            JSON.parse(this.isRead_isOutstandingReceivable) ==
                            true
                          " class="col-lg-4 col-12">
                          <div class="days_change_main">
                            <div class="change_days_amount clearfix" v-for="(range, index) in labelRange">
                              <div class="change_days_rect">
                                <h5 :class="colorArr[index]"></h5>
                              </div>
                              <div class="change_days_text_amount">
                                <h6>{{ range.label }}</h6>
                                <p>
                                  <span class="font_sans">{{ symbol }} </span>{{
                                  manageNan(range.amount)
                                  | formatNumberDashboard
                                  }}
                                </p>

                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-else class="col-lg-4 col-12">
                          <div class="days_change_main">
                            <div class="change_days_amount clearfix" v-for="(range, index) in labelRange">
                              <div class="change_days_rect">
                                <h5 :class="colorArr[index]"></h5>
                              </div>
                              <div class="change_days_text_amount">
                                <h6>{{ range.label }}</h6>

                                <p>
                                  <span class="font_sans">{{ symbol }}</span>
                                </p>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="bottom-revenue-collection receivables-box-bottom-revenue-collection">
                        <div class="row">
                          <div class="col-lg-6 col-12">
                            <div class="revenue-collection-monthly text-center">
                              <h5>Projections in 15 days</h5>
                              <h6 v-if="
                                  JSON.parse(
                                    this.isRead_isOutstandingReceivable
                                  ) == true
                                ">
                                <span class="font_sans">{{ symbol }}</span>
                                {{
                                manageNan(
                                doughnutChartData.datasets[0].data[0]
                                ) | formatNumberDashboard
                                }}
                              </h6>
                              <h6 v-else>
                                <img src="/assets/images/1.0/dashboard/lock-red.png" class="new_lock_white_sidebar" />
                              </h6>

                            </div>
                          </div>
                          <div class="col-lg-6 col-12">
                            <div class="revenue-collection-monthly text-center border-right-none">
                              <h5>Projections in 60 days</h5>
                              <h6 v-if="
                                  JSON.parse(
                                    this.isRead_isOutstandingReceivable
                                  ) == true
                                ">
                                <span class="font_sans">{{ symbol }}</span>
                                {{
                                manageNan(
                                doughnutChartData.datasets[0].data[1]
                                ) | formatNumberDashboard
                                }}
                              </h6>
                              <h6 v-else>
                                <img src="/assets/images/1.0/dashboard/lock-red.png" class="new_lock_white_sidebar" />
                              </h6>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6 col-12 mb-2">
                  <div class="summary-box">
                    <div class="new-box-title clearfix">
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-12">
                          <div class="new-box-heading-left">

                            <h5 class="mt-1">Top 10</h5>
                          </div>
                        </div>
                        <div class="col-lg-6 col-12"></div>
                      </div>
                    </div>
                    <div class="top-table-tabing-inner">
                      <div class="top-table-tabing" ref="tabList">
                        <ul class="top-table-tabing-ul">
                          <li v-for="tab in tabs" :key="tab.id" :data-tab-id="tab.id" class="top-table-tabing-ul-li"
                            :class="{
                              'selected-tab': tab.id === tableopenTab,
                              'top-table-active-link': tab.id === tableopenTab,
                            }">
                            <a class="top-table-tabing-anchor" @click="tabletoggleTabs(tab.id, tab.label)">
                              {{ tab.label }}
                            </a>
                          </li>

                        </ul>

                        <div class="top-table-tabing-inner-content">

                          <div class="tab-content tab-space">
                            <div v-bind:class="{
                                hidden: tableopenTab !== 1,
                                block: tableopenTab === 1,
                              }">
                              <div class="customers-table-top-new">
                                <table v-if="top_customer_data.length !== 0">
                                  <tr v-for="(
                                      top_customer, index
                                    ) in top_customer_data" :key="top_customer.url">
                                    <td align="center" width="10%">
                                      <img v-if="index < 3" :src="getImgSrc(index)" class="img-fluid" loading="lazy" />
                                      <span v-else>{{ index + 1 }}</span>
                                    </td>
                                    <td width="40%" v-if="isPaid == '' || isPaid == null"
                                      v-b-modal.customerstatus-popup>
                                      <router-link :to="{}" class="onclick_details">
                                        {{ top_customer.name }}
                                      </router-link>
                                    </td>
                                    <td width="40%" v-else>
                                      <router-link :to="`${top_customer.url}`" class="onclick_details">
                                        {{ top_customer.name }}
                                      </router-link>
                                    </td>
                                    <td align="right" width="40%">
                                      <span class="font_sans">{{
                                        symbol
                                        }}</span>
                                      {{
                                      manageNan(Math.abs(top_customer.amount))
                                      | formatNumberDashboard
                                      }}
                                      <span v-if="top_customer.amount >= 0" class="greenColor">Cr</span>
                                      <span v-else class="redColor">Dr</span>
                                    </td>
                                  </tr>
                                </table>
                                <table v-else>
                                  <tr>
                                    <td align="center" style="
                                        font-size: 11px;
                                        height: 20rem;
                                        color: rgb(124, 124, 124);
                                      ">
                                      No data available
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                            <div v-bind:class="{
                                hidden: tableopenTab !== 2,
                                block: tableopenTab === 2,
                              }">
                              <div class="customers-table-top-new">
                                <table v-if="top_supplier_data.length !== 0">
                                  <tr v-for="(
                                      top_supplier, index
                                    ) in top_supplier_data" :key="top_supplier.url">
                                    <td align="center" width="10%">
                                      <img v-if="index < 3" :src="getImgSrc(index)" class="img-fluid" loading="lazy" />
                                      <span v-else>{{ index + 1 }}</span>
                                    </td>
                                    <td width="40%" v-if="isPaid == '' || isPaid == null"
                                      v-b-modal.customerstatus-popup>
                                      <router-link :to="{}" class="onclick_details">
                                        {{ top_supplier.name }}
                                      </router-link>
                                    </td>
                                    <td width="40%" v-else>
                                      <router-link :to="`${top_supplier.url}`" class="onclick_details">
                                        {{ top_supplier.name }}
                                      </router-link>
                                    </td>
                                    <td align="right" width="40%">
                                      <span class="font_sans">{{
                                        symbol
                                        }}</span>
                                      {{
                                      manageNan(Math.abs(top_supplier.amount))
                                      | formatNumberDashboard
                                      }}
                                      <span v-if="top_supplier.amount >= 0" class="greenColor">Cr</span>
                                      <span v-else class="redColor">Dr</span>
                                    </td>
                                  </tr>
                                </table>
                                <table v-else>
                                  <tr>
                                    <td align="center" style="
                                        font-size: 11px;
                                        height: 20rem;
                                        color: rgb(124, 124, 124);
                                      ">
                                      No data available
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                            <div v-bind:class="{
                                hidden: tableopenTab !== 3,
                                block: tableopenTab === 3,
                              }">
                              <div class="customers-table-top-new">
                                <table v-if="top_customer_data.length !== 0">
                                  <tr v-for="(
                                      top_customer, index
                                    ) in top_customer_data" :key="top_customer.url">
                                    <td align="center" width="10%">
                                      <img v-if="index < 3" :src="getImgSrc(index)" class="img-fluid" loading="lazy" />
                                      <span v-else>{{ index + 1 }}</span>
                                    </td>
                                    <td width="40%" v-if="isPaid == '' || isPaid == null"
                                      v-b-modal.customerstatus-popup>
                                      <router-link :to="{}" class="onclick_details">
                                        {{ top_customer.name }}
                                      </router-link>
                                    </td>
                                    <td width="40%" v-else>
                                      <router-link :to="`${top_customer.url}`" class="onclick_details">
                                        {{ top_customer.name }}
                                      </router-link>
                                    </td>
                                    <td align="right" width="20%">
                                      <span class="font_sans">{{
                                        symbol
                                        }}</span>
                                      {{
                                      manageNan(Math.abs(top_customer.amount))
                                      | formatNumberDashboard
                                      }}
                                      <span v-if="top_customer.amount >= 0">Cr</span>
                                      <span v-else>Dr</span>

                                    </td>
                                    <td align="right" width="20%">

                                      {{
                                      manageNan(top_customer.qty)
                                      | formatNumberDashboard
                                      }}
                                      {{ top_customer.unit }}
                                    </td>
                                  </tr>
                                </table>
                                <table v-else>
                                  <tr>
                                    <td align="center" style="
                                        font-size: 11px;
                                        height: 20rem;
                                        color: rgb(124, 124, 124);
                                      ">
                                      No data available
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                            <div v-bind:class="{
                                hidden: tableopenTab !== 4,
                                block: tableopenTab === 4,
                              }">
                              <div class="customers-table-top-new">
                                <table v-if="top_customer_data.length !== 0">
                                  <tr v-for="(
                                      top_customer, index
                                    ) in top_customer_data" :key="top_customer.url">
                                    <td align="center" width="10%">
                                      <img v-if="index < 3" :src="getImgSrc(index)" class="img-fluid" loading="lazy" />
                                      <span v-else>{{ index + 1 }}</span>
                                    </td>
                                    <td width="40%" v-if="isPaid == '' || isPaid == null"
                                      v-b-modal.customerstatus-popup>
                                      <router-link :to="{}" class="onclick_details">
                                        {{ top_customer.name }}
                                      </router-link>
                                    </td>
                                    <td width="40%" v-else>
                                      <router-link :to="`${top_customer.url}`" class="onclick_details">
                                        {{ top_customer.name }}
                                      </router-link>
                                    </td>
                                    <td align="right" width="40%">
                                      <span class="font_sans">{{
                                        symbol
                                        }}</span>
                                      {{
                                      manageNan(Math.abs(top_customer.amount))
                                      | formatNumberDashboard
                                      }}
                                      <span v-if="top_customer.amount >= 0">Cr</span>
                                      <span v-else>Dr</span>
                                    </td>
                                  </tr>
                                </table>
                                <table v-else>
                                  <tr>
                                    <td align="center" style="
                                        font-size: 11px;
                                        height: 20rem;
                                        color: rgb(124, 124, 124);
                                      ">
                                      No data available
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                            <div v-bind:class="{
                                hidden: tableopenTab !== 5,
                                block: tableopenTab === 5,
                              }">
                              <div class="customers-table-top-new">
                                <table v-if="top_supplier_data.length !== 0">
                                  <tr v-for="(
                                      top_supplier, index
                                    ) in top_supplier_data" :key="top_supplier.url">
                                    <td align="center" width="10%">
                                      <img v-if="index < 3" :src="getImgSrc(index)" class="img-fluid" loading="lazy" />
                                      <span v-else>{{ index + 1 }}</span>
                                    </td>
                                    <td width="40%" v-if="isPaid == '' || isPaid == null"
                                      v-b-modal.customerstatus-popup>
                                      <router-link :to="{}" class="onclick_details">
                                        {{ top_supplier.name }}
                                      </router-link>
                                    </td>
                                    <td width="40%" v-else>
                                      <router-link :to="`${top_supplier.url}`" class="onclick_details">
                                        {{ top_supplier.name }}
                                      </router-link>
                                    </td>
                                    <td align="right" width="20%">
                                      <span class="font_sans">{{
                                        symbol
                                        }}</span>
                                      {{
                                      manageNan(Math.abs(top_supplier.amount))
                                      | formatNumberDashboard
                                      }}
                                      <span v-if="top_supplier.amount >= 0">Cr</span>
                                      <span v-else>Dr</span>

                                    </td>
                                    <td align="right" width="20%">

                                      {{
                                      manageNan(top_supplier.qty)
                                      | formatNumberDashboard
                                      }}
                                      {{ top_supplier.unit }}
                                    </td>
                                  </tr>
                                </table>
                                <table v-else>
                                  <tr>
                                    <td align="center" style="
                                        font-size: 11px;
                                        height: 20rem;
                                        color: rgb(124, 124, 124);
                                      ">
                                      No data available
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                            <div v-bind:class="{
                                hidden: tableopenTab !== 6,
                                block: tableopenTab === 6,
                              }">
                              <div class="customers-table-top-new">
                                <table v-if="top_supplier_data.length !== 0">
                                  <tr v-for="(
                                      top_supplier, index
                                    ) in top_supplier_data" :key="top_supplier.url">
                                    <td align="center" width="10%">
                                      <img v-if="index < 3" :src="getImgSrc(index)" class="img-fluid" loading="lazy" />
                                      <span v-else>{{ index + 1 }}</span>
                                    </td>
                                    <td width="40%" v-if="isPaid == '' || isPaid == null"
                                      v-b-modal.customerstatus-popup>
                                      <router-link :to="{}" class="onclick_details">
                                        {{ top_supplier.name }}
                                      </router-link>
                                    </td>
                                    <td width="40%" v-else>
                                      <router-link :to="`${top_supplier.url}`" class="onclick_details">
                                        {{ top_supplier.name }}
                                      </router-link>
                                    </td>
                                    <td align="right" width="40%">
                                      <span class="font_sans">{{
                                        symbol
                                        }}</span>
                                      {{
                                      manageNan(Math.abs(top_supplier.amount))
                                      | formatNumberDashboard
                                      }}
                                      <span v-if="top_supplier.amount >= 0">Cr</span>
                                      <span v-else>Dr</span>
                                    </td>
                                  </tr>
                                </table>
                                <table v-else>
                                  <tr>
                                    <td align="center" style="
                                        font-size: 11px;
                                        height: 20rem;
                                        color: rgb(124, 124, 124);
                                      ">
                                      No data available
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-12 mb-2">
                  <div class="summary-box">
                    <div class="new-box-title clearfix">
                      <div class="row align-items-center">
                        <div class="col-lg-3 col-12">
                          <div class="new-box-heading-left">
                            <h5>Day Book</h5>
                          </div>
                        </div>
                        <div class="col-lg-9 col-12">
                          <div class="new-box-right-caption">
                            <ul class="sortby_filter dashboardnew_sortby_filter">
                              <li @click="activatedate('onetoday')" :class="{ active: active_date == 'onetoday' }">
                                Today
                              </li>
                              <li @click="activatedate('oneyesterday')" :class="{
                                  active: active_date == 'oneyesterday',
                                }">
                                Yesterday
                              </li>

                              <li class="new_date_filter_sortby single_date_picker_daybook" :class="{
                                  active: active_date == 'customeDate',
                                }">
                                <date-range-picker ref="picker" :auto-submit="true" :locale-data="{
                                    firstDay: 1,
                                    format: 'dd/mm/yyyy',
                                    customRangeLabel: 'Custom Range',
                                    separator: ' - ',
                                  }" v-model="dateRange" :ranges="defaultRanges" :startDate="startDate"
                                  :singleDatePicker="true" :endDate="endDate" @update="update()">
                                  <template v-slot:input="picker" style="min-width: 350px">

                                    {{ customeDate }}

                                  </template>
                                </date-range-picker>
                              </li>
                            </ul>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="daybook-table-custom">
                      <table class="daybook-header-table">
                        <tr>
                          <th width="20%">Voucher</th>
                          <th width="40%">Particulars</th>
                          <th width="20%">Type</th>
                          <th width="20%" style="text-align: right">Amount</th>
                        </tr>
                      </table>
                      <div class="main-div-daybook-table">
                        <table class="daybook-tbody-table" v-if="daybooks.length !== 0">

                          <tr v-for="daybook in daybooks">
                            <td width="20%" v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
                              <router-link :to="{}" class="onclick_details font-weight-600">
                                {{ daybook.voucherNumber }}
                              </router-link>

                            </td>
                            <td width="20%" v-else>
                              <router-link :to="{ path: daybook.url, query: { masterID: daybook.masterId } }"
                                class="onclick_details font-weight-600">
                                {{ daybook.voucherNumber }}
                              </router-link>

                            </td>
                            <td width="40%">{{ daybook.partyLedgerName }}</td>
                            <td width="20%">{{ daybook.voucherType }}</td>
                            <td width="20%" align="right">
                              <span class="font_sans"><strong>{{ symbol }}
                                  {{
                                  daybook.totalAmount | formatNumberDashboard
                                  }}</strong>
                              </span>
                            </td>
                          </tr>

                        </table>
                        <table class="daybook-tbody-table" v-else>
                          <tr>
                            <td align="center" style="height: 20rem; color: rgb(124, 124, 124)">
                              No data available
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>
<script>
import Vue from "vue";
import EventBus from "../eventBus";

var numeral = require("numeral");

Vue.filter("formatNumberDashboard", function (value) {
 
  if (value != "") {
    return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 0 }).format(
      parseFloat(value).toFixed()
    );
  } else {
    return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 0 }).format(
      value
    );
  }
});
// import Vue from "vue";
import axios from "axios";
import moment from "moment";
// import PwaInstallButton from '@/components/PwaInstallButton.vue'; // Add PwaInstallButton in components
import RevenueCollection from "@/components/RevenueCollection";
import IncomeExpenses from "@/components/IncomeExpenses";
import DoughnutChart from "@/components/DoughnutChart";
import Api from "@/Api";
import Common from "@/Common";
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from "vue2-daterange-picker";
// import { mapState, mapActions } from "vuex";
export default {
  components: {
    DateRangePicker,
    RevenueCollection,
    DoughnutChart,
    IncomeExpenses
  },
  data() {
    let startDate = moment(new Date());
    let endDate = moment(new Date());
    return {
      serverData: localStorage.getItem("server"),
      LastSubsDate: localStorage.getItem("gtagendDate"),
      customerMobile: localStorage.getItem("customermobile"),
      customerStatusData: '',

      dayswisefilters: [
       
      ],
      active_date: "onetoday",
      days_wise_filter: "",
      openTab: 1,
      tableopenTab: 1,
      startDate: startDate,
      new_loading: true,
      endDate: endDate,
      dropdownall: "",
      dateRange: { startDate, endDate },
      defaultRanges: {
        // I got a eslint syntax errors
        Today: [new Date(), new Date()],
        Yesterday: [
          new Date(Date.now() - 3600 * 1000 * 24),
          new Date(Date.now() - 3600 * 1000 * 24),
        ],
      },
      summaryfiscals: {
        Today: [new Date(), new Date()],
        Yesterday: [
          new Date(Date.now() - 3600 * 1000 * 24),
          new Date(Date.now() - 3600 * 1000 * 24),
        ],
        "This Week": [new Date(Date.now() - 7 * 24 * 3600 * 1000), new Date()],
        "Last Week": [
          new Date(Date.now() - 14 * 24 * 3600 * 1000),
          new Date(Date.now() - 7 * 24 * 3600 * 1000),
        ],
        "This Month": [
          new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
        ],
        "Last Month": [
          new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
          new Date(new Date().getFullYear(), new Date().getMonth(), 0),
        ],
        "This Quarter": [
          new Date(
            new Date().getFullYear(),
            Math.floor(new Date().getMonth() / 3) * 3,
            1
          ),
          new Date(
            new Date().getFullYear(),
            Math.floor(new Date().getMonth() / 3) * 3 + 3,
            0
          ),
        ],
        "This Year": [
          new Date(String(localStorage.getItem("first_date_range_start_date"))),
          new Date(String(localStorage.getItem("first_date_range_end_date"))),
        ],
        "Last Year": (() => {
          var start = moment(
            String(localStorage.getItem("first_date_range_start_date"))
          ).add(-1, "year");
          var end = moment(
            String(localStorage.getItem("first_date_range_end_date"))
          ).add(-1, "year");
         
          var isLeapYear = moment(end).isLeapYear();

         

          if (moment(end).format("MM") == 2) {
            if (isLeapYear) {
              var StrGetEndDay = "29";
              var StrGetEndMonthNumber = moment(end).format("MM");
              var StrGetEndYearNumber = moment(end).format("yyyy");
            
              var lastYearArray = [
                start,
                moment(
                  String(
                    StrGetEndMonthNumber +
                      "-" +
                      StrGetEndDay +
                      "-" +
                      StrGetEndYearNumber
                  ),
                  "MM-DD-YYYY"
                ).format("YYYY-MM-DD"),
              ];
            } else {
              var StrGetEndDay = "28";
              var StrGetEndMonthNumber = moment(start).format("MM");
              var StrGetEndYearNumber = moment(start).format("yyyy");
           
              var lastYearArray = [
                start,
                moment(
                  String(
                    StrGetEndMonthNumber +
                      "-" +
                      StrGetEndDay +
                      "-" +
                      StrGetEndYearNumber
                  ),
                  "MM-DD-YYYY"
                ).format("YYYY-MM-DD"),
              ];
            }
          } else {
            var lastYearArray = [start, end];
          }

          return lastYearArray;
        })(),
      },
      model_popup: true,
      selectedValue: "",
      salesArray: [],
      isPaid: "",
      filterBy: moment(String(new Date())).add(-1, "days").format("yyyy-MM-DD"),
      onChange(e) {
        console.log(e.target.value);
        const theTarget =
          e.target.options[e.target.options.selectedIndex].dataset;
      
      },
      symbol: "",
      saleData: [],
      saleAmount: 0,
      purchaseData: [],
      purchaseAmount: 0,
      receiptData: [],
      receiptAmount: 0,
      paymentData: [],
      paymentAmount: 0,
      lock_salesReceipt_Permission: null,
      getLedgerGroups: [],
     
      receivablesAmount: 0,
      payablesData: [],
      payablesAmount: 0,
      bankData: [],
      bankAmount: 0,
      cashData: [],
      cashAmount: 0,
      saleOrderData: [],
      saleOrderAmount: 0,
      purchaseOrderData: [],
      purchaseOrderAmount: 0,
      quotationsAmount: 0,
      CustomerReportBy: "Customers",
      parentUserId_get: "",
      top_customer_data: [],
      total_top_customer: 0,
      SuppliersReportBy: "Suppliers",
      top_supplier_data: [],
      total_top_supplier: 0,
      customer_url: "",
      sale_show: 0,
      receivables_show: 0,
      receipt_show: 0,
      purchase_show: 0,
      payables_show: 0,
      payment_show: 0,
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
      counter: 0,
      new_loading_sale: true,
      new_loading_receivables: true,
      new_loading_receipt: true,
      new_loading_payment: true,
      new_loading_purchase: true,
      new_loading_payables: true,
      new_loading_current_balance: true,
      new_loading_other: true,
      new_loading_customers: true,
      new_loading_suppliers: true,
      hide_show: "0",
      summaryStartDate: "",
      summaryEndDate: "",
      revenueCollectionStartDate: "",
      revenueCollectionEndDate: "",
      selectedRangeForSummary: "",
      selectedRangeForRevenueAndCollection: "",
      bank_show: "0",
      cash_show: "0",
      GroupsDataArray: [
        "All Groups",
        "Sundry Creditors",
        "Sundry Debtors"
      ],
      totalCustomers: "",
      totalCount: 0,
      totalinactiveitems: "",
      pendingBalance: "",
      filterBy: moment(String(new Date())).add(-1, "days").format("yyyy-MM-DD"),
      salesTotalAmount: "",
      receiptTotalAmount: "",
      currentMonthSalesTotalAmount: "",
      currentMonthReceiptTotalAmount: "",
      lastMonthSalesTotalAmount: "",
      lastMonthReceiptTotalAmount: "",
      salesDifferencePercent: "",
      receiptDifferencePercent: "",
      daybookdropdowns: ["Today", "Yesterday"],
      daybookdropdown: "Today",

      legendLabel: true,
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Sales",
            backgroundColor: "#5BBC21",
            data: [],
          },
          {
            label: "Receipt",
            backgroundColor: "#D6FFBD",
            data: [],
          },
        ],
      },
      doughnutChartData: {
        labels: [],
        datasets: [
          {
            borderColor: [
              "#77FCAC", // Light green
              "#FFD77A", // Light yellow
              "#FFAA7A", // Light orange
              "#FF7D7F", // Light red
              "#A3A1FB", // Light purple
              "#71C3FC", // Light blue
            ],
            backgroundColor: [
              "#77FCAC", // Light green
              "#FFD77A", // Light yellow
              "#FFAA7A", // Light orange
              "#FF7D7F", // Light red
              "#A3A1FB", // Light purple
              "#71C3FC", // Light blue
            ],
            data: [],
          },
        ],
      },

      listResponse: [],
      barGraphcomponentKey: 0,
      doughnutcomponentKey: 0,
      currentMonthFlagForSales: true,
      currentMonthFlagForReceipt: true,
      totalOverDue: "",
      inventoryTotal: "",
      invoiceDueAmount: "",
      dayWiseLabels: [],
      labelRange: [],
      fromDaysArr: [],
      projectionDaysArr: [],
      mobileEmptyCount: 0,
      emailEmptyCount: 0,
      colorArr: [
        "rectangle_box bgfifteen",
        "rectangle_box bgthirty",
        "rectangle_box bgfourtyfive",
        "rectangle_box bgabovefourtyfive",
        "rectangle_box fivethRec",
        "rectangle_box sixthRec",
      ],
      selectedDateCollections: "",
      inventory_show: 0,
      tabs: [
        { id: 1, label: "Customers" },
        { id: 2, label: "Suppliers" },
        { id: 3, label: "Items Sold By Quantity" },
        { id: 4, label: "Items Sold By Value" },
        { id: 5, label: "Items Purchased By Quantity" },
        { id: 6, label: "Items Purchased By Value" },
      ],
   
      daybooks: [],
      customeDate: "Custom Date",

      timer: null,
      isOneYearPlan: localStorage.getItem("noOfYearPurchased") < 3,
      targetTime: null, // 2 days from now
      timeLeft: 0,
      timerdays: '00',
      timerhours: '00',
      timerminutes: '00',
      timerseconds: '00',
      payURL: process.env.VUE_APP_PAY_URL
    };
  },
  async created() {
    // await this.fetchTallyData(); 
    GoogleAnalytics.dashboard_new();
    this.symbol = localStorage.getItem("symbol");
    this.summaryStartDate = localStorage.getItem("first_date_range_start_date");
    // this.summaryStartDate = "2023-06-01";
    this.summaryEndDate = localStorage.getItem("first_date_range_end_date");
    this.revenueCollectionStartDate = this.summaryStartDate;
    this.revenueCollectionEndDate = this.summaryEndDate;

    const range = this.summaryfiscals["This Year"];
    this.selectedRangeForSummary = this.formatRange("This Year", range);
    this.selectedRangeForRevenueAndCollection = this.formatRange(
      "This Year",
      range
    );
      this.summarySectionApi();
      this.revenueAndCollectionSectionApi();
    

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthNumber = parseInt(this.summaryStartDate.split("-")[1], 10);
    const labels = [];

    for (let i = monthNumber - 1; i < monthNumber + 11; i++) {
      const monthIndex = i % 12;
      labels.push(monthNames[monthIndex]);
    }
   
    this.chartData.labels = labels;

   
    this.isRead_isSales = localStorage.getItem("isRead_isSales");
    this.isRead_isOutstandingReceivable = localStorage.getItem(
      "isRead_isOutstandingReceivable"
    );
    this.isRead_isReceipt = localStorage.getItem("isRead_isReceipt");
    this.isRead_isPurchase = localStorage.getItem("isRead_isPurchase");
    this.isRead_isOutstandingPayable = localStorage.getItem(
      "isRead_isOutstandingPayable"
    );
    this.isRead_isPayment = localStorage.getItem("isRead_isPayment");
    this.isRead_isBank = localStorage.getItem("isRead_isBank");
    this.isRead_isCash = localStorage.getItem("isRead_isCash");
    this.isRead_isSalesOrder = localStorage.getItem("isRead_isSalesOrder");
    this.isRead_isPurchaseOrder = localStorage.getItem(
      "isRead_isPurchaseOrder"
    );
    this.isRead_isQuotation = localStorage.getItem("isRead_isQuotation");
    
    window.addEventListener("storageChanged", () => {
     
      this.isRead_isSales = localStorage.getItem("isRead_isSales");
      this.isRead_isOutstandingReceivable = localStorage.getItem(
        "isRead_isOutstandingReceivable"
      );
      this.isRead_isReceipt = localStorage.getItem("isRead_isReceipt");
      this.isRead_isPurchase = localStorage.getItem("isRead_isPurchase");
      this.isRead_isOutstandingPayable = localStorage.getItem(
        "isRead_isOutstandingPayable"
      );
      this.isRead_isPayment = localStorage.getItem("isRead_isPayment");
      this.isRead_isBank = localStorage.getItem("isRead_isBank");
      this.isRead_isCash = localStorage.getItem("isRead_isCash");
      this.isRead_isSalesOrder = localStorage.getItem("isRead_isSalesOrder");
      this.isRead_isPurchaseOrder = localStorage.getItem(
        "isRead_isPurchaseOrder"
      );
      this.isRead_isQuotation = localStorage.getItem("isRead_isQuotation");
    });
  },

 
  computed: {
    showBannerType() {
      const daysLeft = this.totalDaysLeft; // Can be negative
      const status = this.customerStatusData.toLowerCase().trim();
      if (status.includes("converted")) {
        if ((daysLeft >= 19 && daysLeft <= 30 && this.isOneYearPlan) || (daysLeft >= 4 && daysLeft <= 15 && this.isOneYearPlan)) {
          return "discount";
        } else if ((daysLeft >= 16 && daysLeft <= 18 && this.isOneYearPlan) || (daysLeft >= 1 && daysLeft <= 3 && this.isOneYearPlan)) {
          return "timer";
        }
      } else if (status.includes("not renewed")) {

        const daysAfterEnd = -daysLeft;
        if (daysAfterEnd >= 0 && daysAfterEnd <= 2 && this.isOneYearPlan) return "discount";
        if (daysAfterEnd >= 3 && daysAfterEnd <= 4 && this.isOneYearPlan) return "timer";
        if (daysAfterEnd >= 5 && daysAfterEnd <= 7 && this.isOneYearPlan) return "discount";
        if (daysAfterEnd >= 8 && daysAfterEnd <= 10 && this.isOneYearPlan) return "timer";
      }
  
      return "none";
    },
    growArrowForSales() {
      if (this.salesDifferencePercent >= 0) {
        return "assets/images/1.0/new-dashboard/grow-top-arrow.png";
      } else {
        return "assets/images/1.0/new-dashboard/loss-down-arrow.png";
      }
    },
    growArrowForReceipt() {
      if (this.receiptDifferencePercent >= 0) {
        return "assets/images/1.0/new-dashboard/grow-top-arrow.png";
      } else {
        return "assets/images/1.0/new-dashboard/loss-down-arrow.png";
      }
    },
    totalDaysLeft() {
      const today = new Date();
      const subscriptionEndDate = new Date(this.LastSubsDate);
      const timeDifference = subscriptionEndDate - today;
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      return daysDifference;
   },
   customerStatusCheck(){
    return this.customerStatusData.toLowerCase().trim().includes('converted') ||
    this.customerStatusData.toLowerCase().trim().includes('not renewed')
   },
   customerStatusCheckForTrial(){
    return this.customerStatusData.toLowerCase().trim().includes('installation expired')
   },
   dynamicUrl() {
    if(this.serverData == 'Dev'){
      return `https://devpay.livekeeping.com/${this.customerMobile}`
    }
    else{
      return `https://pay.livekeeping.com/${this.customerMobile}`;
    }
    },

  },
  

  methods: {
     handleAddOnNavigation() {
      GoogleAnalytics.Renewal_Banner_Claim_Button();
      const customerMobile = localStorage.getItem("customermobile");
      window.open(`${this.payURL}/${customerMobile}?p=1&utm=web`, '_blank');
    },
    startTimer() {
      this.updateTimer();
      this.timer = setInterval(this.updateTimer, 1000);
    },
    updateTimer() {
      const now = new Date().getTime();
      const distance = this.targetTime - now;

      if (distance < 0) {
        clearInterval(this.timer);
        this.timerdays = this.timerhours = this.timerminutes = this.timerseconds = '00';
        return;
      }

      this.timerdays = this.format(Math.floor(distance / (1000 * 60 * 60 * 24)));
      this.timerhours = this.format(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.timerminutes = this.format(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      this.timerseconds = this.format(Math.floor((distance % (1000 * 60)) / 1000));
    },
    format(value) {
      return value < 10 ? '0' + value : value;
    },
    activatedate: function (date) {
      GoogleAnalytics.dashboard_new_screen_day_book(date);
      this.customeDate = "Custom Date";
      if (date === "onetoday") {
        var new_date_start_date = moment(String(new Date())).format(
          "yyyy-MM-DD"
        );
        var new_date_end_date = moment(String(new Date())).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "oneyesterday") {
        var new_date_start_date = moment(
          String(new Date(Date.now() - 3600 * 1000 * 24))
        ).format("yyyy-MM-DD");
        var new_date_end_date = moment(
          String(new Date(Date.now() - 3600 * 1000 * 24))
        ).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      }
      this.daybook();
      this.active_date = date;
    },

    update() {
      GoogleAnalytics.dashboard_new_screen_day_book("Custom Date");
      this.active_date = "customeDate";
      this.customeDate = moment(this.$refs.picker.start).format("DD MMM YY");
      this.daybook();
    },

    viewAllEvent() {
    
      GoogleAnalytics.dashboard_new_screen_receivables_viewall("viewAll");
      this.$router.push({ name: "dashboard-receivables" });
    },

    manageNan(value) {
      // alert(value);
      if (isNaN(value)) {
        return 0;
      } else {
        return value;
      }
    },
   
    formatRange(label, range) {
      if (label === "Today" || label === "Yesterday") {
        const startDate = new Date(range[0]);
        const formattedDate =
          this.addOrdinalIndicator(startDate.getDate()) +
          " " +
          startDate.toLocaleDateString("en-IN", { month: "short" }) +
          " '" +
          startDate.toLocaleDateString("en-IN", { year: "2-digit" });

        return `${label} (${formattedDate})`;
      } else {
        const startDate = new Date(range[0]);
        const endDate = new Date(range[1]);

        const startDateWithOrdinal =
          this.addOrdinalIndicator(startDate.getDate()) +
          " " +
          startDate.toLocaleDateString("en-IN", { month: "short" }) +
          " '" +
          startDate.toLocaleDateString("en-IN", { year: "2-digit" });

        const endDateWithOrdinal =
          this.addOrdinalIndicator(endDate.getDate()) +
          " " +
          endDate.toLocaleDateString("en-IN", { month: "short" }) +
          " '" +
          endDate.toLocaleDateString("en-IN", { year: "2-digit" });

        return `${label} (${startDateWithOrdinal} - ${endDateWithOrdinal})`;
      }
    },

    addOrdinalIndicator(day) {
      if (day >= 11 && day <= 13) {
        return day + "th";
      } else {
        switch (day % 10) {
          case 1:
            return day + "st";
          case 2:
            return day + "nd";
          case 3:
            return day + "rd";
          default:
            return day + "th";
        }
      }
    },

    

    handleRangeChange(section) {
      // debugger;
      const inputString =
        section === "summary"
          ? this.selectedRangeForSummary
          : section === "revenue"
          ? this.selectedRangeForRevenueAndCollection
          : this.selectedRangeForAnotherSection;

    
      const startIndex = inputString.indexOf("(") + 1;
      const extractedLabel = inputString.substring(0, startIndex - 1);
      this.selectedDateCollections = extractedLabel.trim();
      if (extractedLabel) {
        const rangeValue = this.summaryfiscals[extractedLabel.trim()];
        if (section === "summary") {
          this.summaryStartDate = moment(rangeValue[0]).format("YYYY-MM-DD");
          this.summaryEndDate = moment(rangeValue[1]).format("YYYY-MM-DD");
          GoogleAnalytics.dashboard_new_screen_summary_datepicker(
            this.summaryStartDate,
            this.summaryEndDate
          );
        } else if (section === "revenue") {
          this.revenueCollectionStartDate = moment(rangeValue[0]).format(
            "YYYY-MM-DD"
          );
          this.revenueCollectionEndDate = moment(rangeValue[1]).format(
            "YYYY-MM-DD"
          );
          GoogleAnalytics.dashboard_new_screen_sales_receipt_datepicker(
            this.revenueCollectionStartDate,
            this.revenueCollectionEndDate
          );
        }
       

        if (section === "summary") {
          // alert('summary');
          this.summarySectionApi();
        } else if (section === "revenue") {
          // alert('revenu');
          this.revenueAndCollectionSectionApi();
        } else if (section === "income") {
          // this.anotherSectionApi();
        }
      }
    },

    summarySectionApi() {
     
      this.payables_data();
      this.inventory_data();
      this.receipt_data();
      this.bank_data();
      this.cash_data();
    },

    // --------------- Api function for Revenue and Collection-----------

    revenueAndCollectionSectionApi() {
      this.getRevenueAndCollectionByMonth("Sales");
      this.getRevenueAndCollectionByMonth("Receipt");
    },

    // --------------- Getting Top 10 sections, top-3 images ---------------
    getImgSrc(index) {
      if (index === 0) {
        return "assets/images/1.0/new-dashboard/first-prize.png";
      } else if (index === 1) {
        return "assets/images/1.0/new-dashboard/second-prize.png";
      } else if (index === 2) {
        return "assets/images/1.0/new-dashboard/third-prize.png";
      } else {
        return "";
      }
    },

    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    tabletoggleTabs: function (tabNumber, tabName) {
     
      GoogleAnalytics.dashboard_new_screen_top_10(tabName);
      const tabList = this.$refs.tabList;

      // Find the selected tab element by tabId
      const selectedTab = tabList.querySelector(`[data-tab-id="${tabNumber}"]`);

      if (selectedTab) {
        selectedTab.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }

      this.CustomerReportBy = tabName;
      this.tableopenTab = tabNumber;
      if (tabName === "Customers") {
       
        this.top_customer();
      } else if (tabName === "Suppliers") {
       
        this.top_supplier();
      } else if (
        tabName === "Items Sold By Quantity" ||
        tabName === "Items Sold By Value"
      ) {
      
        this.top_customer();
      } else if (
        tabName === "Items Purchased By Quantity" ||
        tabName === "Items Purchased By Value"
      )
        this.top_supplier();
    },

    receipt_data() {
      this.new_loading_receipt = true;
      this.symbol = localStorage.getItem("symbol");
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startDate: this.summaryStartDate,
        endDate: this.summaryEndDate,
        VoucherType: "Receipt",
        searchTerm: "",
        groupByAmount: "Gross",
        startLimit: 0,
        endLimit: 3,
        requestFrom: "WEB",
        sortBy: "totalAmount",
        orderBy: -1,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getVouchersSummaryByLedgerListGo(data, headers)
        .then((response) => {
       
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
        
          if (responseStatus == "200") {
            for (let [key, value] of Object.entries(response.data.data.list)) {
              response.data.data.list[key].totalAmount = Math.abs(
                response.data.data.list[key].totalAmount
              );
            }
            this.receiptData = response.data.data.list;
            this.receiptAmount = Math.abs(
              response.data.data.voucherTotalAmount
            );
            this.receipt_show = 1;
            this.new_loading = false;
            this.new_loading_receipt = false;
          } else {
            this.receiptData = [];
            this.receiptAmount = 0;
            this.receipt_show = 0;
            this.new_loading = false;
            this.new_loading_receipt = false;
          }
         
        })
        .catch((err) => {
          this.loading = false;
          this.new_loading = false;
          Common.getStatusForActionFailed(err.response.status);
        });
    },

   

    outstanding_data(type) {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startDate: this.summaryStartDate,
        endDate: this.summaryEndDate,
        outstandingType: "Receivables",
        // filterBy: "Due Today",
        filterBy: "All Due",
        startLimit: 0,
        endLimit: 10,
        requestFrom: "WEB",

        searchTerm: "",
        groupBy: "All Receivables",
        rangeValue: 0,
        sortBy: "",
        orderBy: 1,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getOutstandingDetailsGo(data, headers)
        .then((response) => {
      
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            this.totalOverDue = Math.abs(
              response.data.data.totalClosingBalance
            );
          } else {
            this.totalOverDue = 0;
          }
     
        })

        .catch((err) => {
        
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },

    receivables_data(filterBy, rangeValue = 0, key) {
      this.new_loading_receivables = true;
      let projectionFlag = false;

      if (filterBy == "Projection") {
        filterBy = "Range";
        projectionFlag = true;
      }

      this.symbol = localStorage.getItem("symbol");

      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startLimit: 0,
        endLimit: 10,
        requestFrom: "WEB",
        startDate: this.summaryStartDate,
        endDate: this.summaryEndDate,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getOutstandingDetailsReceivablesGo(data, headers)
        .then((response) => {
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );

          if (responseStatus == "200") {
          
            if (response.data.data.list.length) {
              let result = response.data.data.list;
              console.log(result);
              result.forEach((obj) => {
                const label = obj.fromDays.includes(">")
                  ? `${obj.fromDays} Days`
                  : `${obj.fromDays} - ${obj.toDays} Days`;

                this.labelRange.push({
                  label,
                  amount: Math.abs(obj.totalAmount),
                });

                this.doughnutChartData.labels.push(label);
                this.doughnutChartData.datasets[0].data.push(
                  Math.abs(obj.totalAmount)
                );
              });

              this.doughnutcomponentKey++;
            } else {
           
              this.receivables_show = 0;
              this.new_loading = false;
              this.new_loading_receivables = false;
            }
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
        });
    },
   

    payables_data() {
      this.new_loading_payables = true;
      this.symbol = localStorage.getItem("symbol");
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        outstandingType: "Payables",
        filterBy: "All",
        startLimit: 0,
        endLimit: 10,
        requestFrom: "WEB",
        startDate: this.summaryStartDate,
        endDate: this.summaryEndDate,
        searchTerm: "",
        groupBy: "All Payables",
        
        rangeValue: 0,
       
        sortBy: "ledgerName",
        orderBy: 1,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getOutstandingDetailsGo(data, headers)
        .then((response) => {
        
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            this.payablesAmount = Math.abs(
              response.data.data.totalClosingBalance
            );
            this.payables_show = 1;
            this.new_loading = false;
            this.new_loading_payables = false;
          } else {
            this.payablesData = [];
            this.payablesAmount = 0;
            this.payables_show = 0;
            this.new_loading = false;
            this.new_loading_payables = false;
          }
        
        })
        .catch((err) => {
      
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },

    inventory_data() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startLimit: 0,
        endLimit: 5,
        requestFrom: "WEB",
        searchTerm: "",
        orderBy: -1,
        sortBy: "",
        startDate: this.summaryStartDate,
        endDate: this.summaryEndDate,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getStockItemsGo(data, headers)
        .then((response) => {
        
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            this.inventoryTotal = response.data.data.totalClosingValue;
            this.inventory_show = 1;
          } else {
            this.inventoryTotal = 0;
            this.inventory_show = 0;
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
        });
    },

    bank_data() {
      this.new_loading_other = true;
      this.new_loading_current_balance = true;
      this.symbol = localStorage.getItem("symbol");
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startLimit: 0,
        endLimit: 20,
        requestFrom: "WEB",
        startDate: this.summaryStartDate,
        endDate: this.summaryEndDate,
        searchTerm: "",
        groupBy : "Bank",
        isForLedgerGroup : false
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
    
      Api.getLedgersForBankOrCash(data, headers)
        .then((response) => {
       
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            for (let [key, value] of Object.entries(response.data.data.list)) {
              response.data.data.list[key].balance = Math.abs(
                response.data.data.list[key].balance
              );
            }
            this.bankData = response.data.data.list;
            this.bankAmount = Math.abs(response.data.data.totalBalanceSum);
            this.new_loading = false;
            this.bank_show = 1;
          } else {
            this.bank_show = 0;
            this.bankData = [];
            this.bankAmount = "";
            this.new_loading = false;
          }
          // }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
        });
    },
    cash_data() {
      this.symbol = localStorage.getItem("symbol");
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startLimit: 0,
        endLimit: 20,
        requestFrom: "WEB",
        startDate: this.summaryStartDate,
        endDate: this.summaryEndDate,
        searchTerm: "",
        groupBy: "Cash",
        isForLedgerGroup : false
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgersForBankOrCash(data, headers)
        .then((response) => {
        
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            for (let [key, value] of Object.entries(response.data.data.list)) {
              response.data.data.list[key].balance = Math.abs(
                response.data.data.list[key].balance
              );
            }
            this.cashData = response.data.data.list;
            this.cashAmount = Math.abs(response.data.data.totalBalanceSum);
            this.new_loading = false;
            this.cash_show = 1;
          } else {
            this.cash_show = 0;
            this.cashData = [];
            this.cashAmount = "";
            this.new_loading = false;
          }
         
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
        });
    },

    top_customer() {
      this.new_loading_customers = true;
      this.symbol = localStorage.getItem("symbol");

      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
      
        startDate: localStorage.getItem("first_date_range_start_date"),
        endDate: localStorage.getItem("first_date_range_end_date"),
        voucherTypes: ["Sales"],
        searchTerm: "",
        startLimit: 0,
        endLimit: 10,
        requestFrom: "WEB",
        filterBy: this.CustomerReportBy,
  
        sortBy: "amount",
        orderBy: -1,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getTopReportsGo(data, headers)
        .then((response) => {
        
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            for (let [key, value] of Object.entries(response.data.data.list)) {
              response.data.data.list[key].amount =
                response.data.data.list[key].amount;

              if (this.CustomerReportBy == "Customers") {
                response.data.data.list[key].url =
                  "/parties/" + response.data.data.list[key]._id;
              } else {
                response.data.data.list[key].url =
                  "/items/" + response.data.data.list[key]._id;
              }
            }
            this.top_customer_data = response.data.data.list;
            this.total_top_customer = response.data.data.totalCount;
            this.new_loading = false;
            this.new_loading_customers = false;
          } else {
            this.top_customer_data = [];
            this.total_top_customer = "";
            this.new_loading = false;
            this.new_loading_customers = false;
          }
       
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
        });
    },

    top_supplier() {
      this.new_loading_customers = true;
      this.symbol = localStorage.getItem("symbol");
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startDate: localStorage.getItem("first_date_range_start_date"),
        endDate: localStorage.getItem("first_date_range_end_date"),
       
        voucherTypes: ["Purchase"],
        searchTerm: "",
        startLimit: 0,
        endLimit: 10,
        requestFrom: "WEB",
       
        filterBy: this.CustomerReportBy,
        sortBy: "amount",
        orderBy: -1,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getTopReportsGo(data, headers)
        .then((response) => {
          
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
       
          if (responseStatus == "200") {
            for (let [key, value] of Object.entries(response.data.data.list)) {
              response.data.data.list[key].amount =
                response.data.data.list[key].amount;
            
              if (this.CustomerReportBy == "Suppliers") {
                response.data.data.list[key].url =
                  "/parties/" + response.data.data.list[key].guid;
              } else {
                response.data.data.list[key].url =
                  "/items/" + response.data.data.list[key].guid;
              }
            }
            this.top_supplier_data = response.data.data.list;
            this.total_top_supplier = response.data.data.totalCount;
            this.new_loading = false;
            this.new_loading_customers = false;
          } else {
            this.top_supplier_data = [];
            this.total_top_supplier = "";
            this.new_loading = false;
            this.new_loading_customers = false;
          }
       
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
        });
    },

    inactivecustomer_data() {
      this.symbol = localStorage.getItem("symbol");
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startLimit: 0,
        endLimit: 10,
        sortBy: "ledgerName",
        orderBy: 1,
        requestFrom: "WEB",
        searchTerm: "",
        voucherTypes: ["Sales"],
       
        filterBy: this.filterBy,
        groupBy: this.GroupsDataArray,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getInactiveCustomerReportsGo(data, headers)
       
        .then((response) => {
        
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            this.totalCustomers = response.data.data.totalCount;
            this.loading = false;
          }
        })

        .catch((err) => {
          
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },

    inactiveitems_data() {
      this.symbol = localStorage.getItem("symbol");
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startLimit: 0,
        endLimit: 10,
        requestFrom: "WEB",
        searchTerm: "",
        voucherTypes: ["Sales"],
   
        filterBy: this.filterBy,
        orderBy: 1,
        sortBy: "stockItemName",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getInactiveItemsReportGo(data, headers)
   
        .then((response) => {
      
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            this.totalinactiveitems = response.data.data.totalStockItem;
            this.totalCount = response.data.data.totalCount;
            this.loading = false;
            this.new_loading = false;
          }
        })
        .catch((err) => {
        
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },

    smsCreditsSummary() {
      if (
        this.summaryStartDate != null ||
        this.summaryEndDate != null ||
        this.companyId != null
      ) {
        this.loading = true;
        this.new_loading = true;

        if(localStorage.getItem("_parentUserId") != ""){
          var data = {
            mainUserId : localStorage.getItem("_parentUserId"),
            _userId: localStorage.getItem("customerId"),
            companyId: localStorage.getItem("companyId"),
            searchTerm: this.search,
            startLimit: "0",
            endLimit: "10",
            startDate: this.summaryStartDate,
            endDate: this.summaryEndDate,
            templateType: "SMS",
            requestFrom: "WEB",
          };
        }else{
          var data = {
            mainUserId : localStorage.getItem("customerId"),
            _userId: localStorage.getItem("customerId"),
            companyId: localStorage.getItem("companyId"),
            searchTerm: this.search,
            startLimit: "0",
            endLimit: "10",
            startDate: this.summaryStartDate,
            endDate: this.summaryEndDate,
            templateType: "SMS",
            requestFrom: "WEB",
          };
        }
        
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        Api.getPaymentReminderSummaryGo(data, headers)
       
          .then((response) => {
          
            const responseStatus = Common.getStatusForActionFailed(
              response.data.status
            );
            if (responseStatus == "200") {
              this.pendingBalance = response.data.data.pendingBalance;
            } else {
              this.pendingBalance = response.data.data.pendingBalance;
            }
            this.loading = false;
            this.new_loading = false;
       
          })
          .catch((err) => {
           
            Common.getStatusForActionFailed(err.response.status);
            this.loading = false;
            this.new_loading = false;
          });
      }
    },
    paymentReminders() {
      if (
        this.summaryEndDate != null ||
        this.summaryStartDate != null ||
        this.companyId != null
      ) {
        this.loading = true;
        this.new_loading = true;

        const data = {
          _userId: localStorage.getItem("customerId"),
          companyId: localStorage.getItem("companyId"),
          requestFrom: "WEB",
          startLimit: "0",
          endLimit: "20",
          startDate: this.summaryStartDate,
          endDate: this.summaryEndDate,
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        this.myledgers = [];
        Api.paymentRemindersListGo(data, headers)
          .then((response) => {
            if (response.data.message == "AUTHENTICATION_FAILED") {
              localStorage.clear();
              window.location.href = "/";
            } else {
              this.emailEmptyCount = response.data.data.failedEmailCount;
              this.mobileEmptyCount = response.data.data.failedSmsCount;
              this.loading = false;
              this.new_loading = false;
            }
          })

          .catch((err) => {
            Common.getStatusForActionFailed(err.response.status);
            this.loading = false;
            this.new_loading = false;
          });
      }
    },

    getRevenueAndCollectionByMonth(voucherType) {
      this.erroMsgFlag = false;
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startDate: this.revenueCollectionStartDate,
        endDate: this.revenueCollectionEndDate,
        voucherType: voucherType,
        searchTerm: "",
        groupByAmount: "Gross",
        startLimit: 0,
        endLimit: 12,
        sortBy: "name",
        orderBy: 1,
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getVouchersSummaryByMonthGo(data, headers)
        
        .then((response) => {
 
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            if (voucherType.includes("Sales")) {
           
              this.listResponse = response.data.data.list;
              this.salesTotalAmount = Math.abs(response.data.data.totalAmount);

              if (this.currentMonthFlagForSales) {
                const currentDate = new Date();
                const firstDayOfCurrentMonth = new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  1
                );
                const firstDayOfLastMonth = new Date(firstDayOfCurrentMonth);
                firstDayOfLastMonth.setMonth(firstDayOfLastMonth.getMonth());

                const lastMonthYear = firstDayOfLastMonth
                  .toISOString()
                  .slice(0, 7);
                const lastMonthObject = response.data.data.list.find((obj) =>
                  obj.startDate.startsWith(lastMonthYear)
                );
                this.lastMonthSalesTotalAmount = lastMonthObject
                  ? Math.abs(lastMonthObject.amount)
                  : "0";

                const currentMonthYear = currentDate.toISOString().slice(0, 7);
           
                const currentMonthObject = response.data.data.list.find((obj) =>
                  obj.startDate.startsWith(currentMonthYear)
                );
                this.currentMonthSalesTotalAmount = currentMonthObject
                  ? Math.abs(currentMonthObject.amount)
                  : "0";
                this.calLastAndCurrentMonthPer(
                  this.lastMonthSalesTotalAmount,
                  this.currentMonthSalesTotalAmount,
                  "Sales"
                );
                this.currentMonthFlagForSales = false;
              }

              //  debugger;
              this.getChartData(this.listResponse, "Sales");
            } else if (voucherType.includes("Receipt")) {
              // Store the Receipt data
              this.listResponse = response.data.data.list;
              this.receiptTotalAmount = Math.abs(
                response.data.data.totalAmount
              );

              if (this.currentMonthFlagForReceipt) {
                const currentDate = new Date();
                const firstDayOfCurrentMonth = new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  1
                );
                const firstDayOfLastMonth = new Date(firstDayOfCurrentMonth);
                firstDayOfLastMonth.setMonth(firstDayOfLastMonth.getMonth());

                const lastMonthYear = firstDayOfLastMonth
                  .toISOString()
                  .slice(0, 7);
                const lastMonthObject = response.data.data.list.find((obj) =>
                  obj.startDate.startsWith(lastMonthYear)
                );
                this.lastMonthReceiptTotalAmount = lastMonthObject
                  ? lastMonthObject.amount
                  : "0";

                const currentMonthYear = currentDate.toISOString().slice(0, 7);
               
                const currentMonthObject = response.data.data.list.find((obj) =>
                  obj.startDate.startsWith(currentMonthYear)
                );
                this.currentMonthReceiptTotalAmount = currentMonthObject
                  ? currentMonthObject.amount
                  : "0";
                this.calLastAndCurrentMonthPer(
                  this.lastMonthReceiptTotalAmount,
                  this.currentMonthReceiptTotalAmount,
                  "Receipt"
                );
                this.currentMonthFlagForReceipt = false;
              }

              this.getChartData(this.listResponse, "Receipt");
            }
            this.loading = false;
            this.new_loading = false;
          } else {
           
            if (voucherType.includes("Sales")) {
              this.salesTotalAmount = 0.0;
              this.chartData.datasets[0].data = [];
              for (let i = 0; i < 12; i++) {
                this.chartData.datasets[0].data.push(0);
              }
            } else if (voucherType.includes("Receipt")) {
              this.receiptTotalAmount = 0.0;
              this.chartData.datasets[1].data = [];
              for (let i = 0; i < 12; i++) {
                this.chartData.datasets[1].data.push(0);
              }
            }
            this.barGraphcomponentKey += 1;

            this.loading = false;
            this.new_loading = false;
            this.totalAmount = 0;
          }
       
        })

        .catch((err) => {
        
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },

    //--------------- Calculating ChartData with getVouchersSummaryByMonth's respnose -----------------------

    getChartData(response, label) {
     
      const revenueData = Array(12).fill(0);
      const collectionData = Array(12).fill(0);
      const months = this.chartData.labels;

      response.forEach((item) => {
        // debugger;
        console.log("forEach looping 2", item);
        const dataParts = item.monthYear.split("-");
        const monthIndex = months.indexOf(dataParts[0]);
        const totalAmount = parseFloat(Math.abs(item.amount));
       
        console.log("forEach looping 34", totalAmount);
        if (monthIndex !== -1) {
          if (label == "Sales") {
            revenueData[monthIndex] =
              Math.abs(totalAmount) > 0 ? totalAmount : "0";
          } else if (label == "Receipt") {
            collectionData[monthIndex] =
              Math.abs(totalAmount) > 0 ? totalAmount : "0";
          }
        }
      });
      if (label == "Sales") {
       
        const salesPermisiion = localStorage.getItem("isRead_isSales");
        if (salesPermisiion == "true") {
          this.chartData.datasets[0].data = revenueData;
        } else {
          this.chartData.datasets[0].data = [];
        }
        console.log(
          "this.chartData.datasets[0].data 1",
          this.chartData.datasets[0].data
        );
      } else if (label == "Receipt") {
     

        const ReceiptPermisiion = localStorage.getItem("isRead_isReceipt");
        if (ReceiptPermisiion == "true") {
          this.chartData.datasets[1].data = collectionData;
        } else {
          this.chartData.datasets[1].data = [];
        }
        console.log(
          "this.chartData.datasets[0].data 2",
          this.chartData.datasets[1].data
        );
      }

      this.barGraphcomponentKey += 1;
    },

    //-------------------------- Calculation of % from last Month to Current Month---------------

    calLastAndCurrentMonthPer(lastMonth, currentMonth, label) {
      if (label == "Sales") {
        if (lastMonth == 0) {
          this.salesDifferencePercent = currentMonth == 0 ? 0 : 100; // Handle the case where lastMonth is zero
        } else {
          this.salesDifferencePercent = (
            ((currentMonth - lastMonth) / Math.abs(lastMonth)) *
            100
          ).toFixed(2); // Calculate the percentage change
        }
      } else if (label == "Receipt") {
        if (lastMonth == 0) {
          this.receiptDifferencePercent = currentMonth == 0 ? 0 : 100; // Handle the case where lastMonth is zero
        } else {
          this.receiptDifferencePercent = (
            ((currentMonth - lastMonth) / Math.abs(lastMonth)) *
            100
          ).toFixed(2);
        }
      }
    },

 

    setDoughnutData() {
      this.labelRange.forEach((obj) => {
      
        setTimeout(() => {
          this.doughnutChartData.datasets.data.push(obj.amount);
          console.log(obj.totalAmount, "totalamount in");
        }, 1000);
      });
      setTimeout(() => {
        this.doughnutcomponentKey += 1;
      }, 2200);
    },

    daybook() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startLimit: 0,
        endLimit: 100,

        voucherTypes: [
          "Sales",
          "Purchase",
          "Sales Order",
          "Purchase Order",
          "Debit Note",
          "Credit Note",
          "Receipt",
          "Payment",
          "Journal",
          "Contra",
          "Delivery Note",
        ],
     
        groupByAmount: "Gross",
        sortBy: "voucherNumber",
        orderBy: -1,
        requestFrom: "WEB",
        startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        endDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        searchTerm: "",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getVouchersbyCompanyIdGo(data, headers)
      
        .then((response) => {
        
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            for (let [key, value] of Object.entries(response.data.data.list)) {
              response.data.data.list[key].totalAmount = Math.abs(
                response.data.data.list[key].totalAmount
              );
              response.data.data.list[key].url =
                "/parties/details/" +
                response.data.data.list[key]._id +
                "/" +
                response.data.data.list[key].parentType;
            }
          
            this.loading = false;
            this.new_loading = false;
            this.daybooks = response.data.data.list;
            
          } else {
            this.loading = false;
            this.new_loading = false;
            this.daybooks = [];
          
          }
       
        })

        .catch((err) => {
        
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },
    initializeCounter() {
      const savedData = JSON.parse(localStorage.getItem("dailyLimit")) || {};
      const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

      if (savedData.date !== today) {
        // Reset count if date is different
        localStorage.setItem("dailyLimit", JSON.stringify({ date: today, count: 50 }));
        this.count = 0;
      } else {
        this.count = savedData.count;
      }
    },
  },
   async mounted() {
    this.initializeCounter();
    setTimeout(() => {
      const updatedDate = localStorage.getItem("gtagendDate");
      this.LastSubsDate = updatedDate; 
      this.customerStatusData = localStorage.getItem("customerStatus");
      const now = new Date();
      const endDate = new Date(this.LastSubsDate);
      const timeDifference = endDate.getTime() - now.getTime();
      const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      const daysAfterEnd = -daysLeft;
      const status = this.customerStatusData.toLowerCase().trim();
    
      if (
        (status.includes('converted')) &&
        daysLeft >= 1
      ) {
        //  Active user with valid days left
        this.targetTime = endDate.getTime();
        this.startTimer();
      } else if (
        status.includes('not renewed') &&
        daysAfterEnd >= 0 &&
        daysAfterEnd <= 10 // only show timer max 10 days after end
      ) {
        //  Not renewed user, within 10-day post-expiry window
        if (daysAfterEnd >= 3 && daysAfterEnd <= 4) {
          const target = new Date(this.LastSubsDate);
          target.setDate(target.getDate() + 5); // End date + 5 days
          this.targetTime = target.getTime();
          this.startTimer();
      
        } else if (daysAfterEnd >= 8 && daysAfterEnd <= 10) {
          const target = new Date(this.LastSubsDate);
          target.setDate(target.getDate() + 11); // End date + 11 days
          this.targetTime = target.getTime();
          this.startTimer();
        }
      } else {
        // No timer
        this.targetTime = null;
      }
    }, 1500);
    console.log(this.totalDaysLeft, "daysDifference")
    this.isPaid = localStorage.getItem("isPaid");
    this.top_customer();
    this.summaryfiscals;

    setTimeout(() => {
      this.inactivecustomer_data();
      this.parentUserId_get = localStorage.getItem("_parentUserId");
      const salesPermisiion2 = localStorage.getItem("isRead_isSales");
      const ReceiptPermisiion2 = localStorage.getItem("isRead_isReceipt");
      if (salesPermisiion2 == "false" && ReceiptPermisiion2 == "false") {
        this.lock_salesReceipt_Permission = true;
      
      } else {
        this.lock_salesReceipt_Permission = false;
      }
    }, 500);
    this.inactiveitems_data();
    this.smsCreditsSummary();
   
    this.paymentReminders();
    this.daybook();
    this.outstanding_data();
    this.receivables_data();

    // Gtag Code
    gtag("config", "G-FLV2C8MTDJ", {
      user_id: localStorage.getItem("customerId"),
    });
    this.$forceUpdate();
    localStorage.setItem("gtagdeviceBrowser", this.$browserDetect.meta.name);
    localStorage.setItem("gtagdeviceVersion", this.$browserDetect.meta.version);

    // Create and configure the ClickMagick pixel
    // var cmPixel = document.createElement("img");
    // cmPixel.src =
    //   "//www.clkmg.com/api/a/pixel/?uid=176983&ref=livekeeping&lock=208230";
    // // Append the ClickMagick pixel to the DOM
    // document.body.appendChild(cmPixel);
  //  }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },

};
</script>

<style scoped>

.create_transaction_box {
  float: right;
  overflow: hidden;
  background: #f0e68c;
}


.create_transaction_box_inner {
  width: 250px;
  padding: 10px;
  border: 1px solid #a29415;
}

.top-table-tabing-ul {
  display: flex; 
 
  overflow-x: auto; 
}

.top-table-tabing-ul-li {
  min-width: fit-content;
  padding: 5px 10px;
  white-space: nowrap;
  cursor: pointer;
  margin-right: 10px;
  position: relative;
}
.top-table-tabing-ul-li a {
  font-weight: 600;
  color: #525252;
  font-size: 12px;
}
.top-table-tabing-ul-li.selected-tab {
  border: 1px solid black;
  border-radius: 5px;
}

.span_lock {
  margin-left: 5px;
}

.fivethRec {
  background: #A3A1FB;
}

.sixthRec {
  background: #71C3FC;
}
</style>