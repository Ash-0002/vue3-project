<template>
    <div class="ExitModalQuitePopupLast" v-if="showModal">
      <div class="MainOverlayOutsideDiv">
        <div class="MainTallyExitPopupSetPortion">
            <div class="CompanyPopupLabelExitPopup">
            <div class="row align-items-center">
              <div class="col-lg-8 col-8">
                <div class="ExitPopupLabelCompanyText">
                  <h6>Gateway of Tally</h6>
                </div>
              </div>
              <div class="col-lg-4 col-4">
                <div class="ExitPopupLabelCompanyTextIcon">
                  <a href="javascript:void(0);" @click="handleNo"
                    ><i class="fa fa-close"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="ExitModalContentLastQuiteCaption">
            <div class="ExitModalLabelCaptioContentBoxSet">
                <div class="ExitPopupTitleQuiteOption">
                    <p>Quit ?</p>
                </div>
                  <div class="ExitModalContentCaptioYesNo">
                    <button style="cursor: pointer;" @click="handleYes">Yes</button>
                       <span> Or </span>
                       <button style="cursor: pointer;" @click="handleNo">No</button>
                    </div>
            </div>
          </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        showModal: {
            type: Boolean
        },
    },
    methods: {
        handleNo() {
            this.$emit('closed');
        },
        handleYes() {
            this.$emit('quit');
        },
    },
};
</script>
