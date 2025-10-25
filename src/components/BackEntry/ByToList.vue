<template>
    <div class="custom-popup-overlay" @click.self="closePopup">
        <div class="custom-popup-container">
            <div class="popup-header">
                <span class="titleHead">{{ title }}</span>
                <!-- <button @click="closePopup">X</button> -->
            </div>
            <ul class="customUl">
                <li class="customLi" v-for="(type, index) in optionsData" :class="{ selected: selectedIndex === index }" :key="index"
                    @click="selectDocumentType(type)">
                    {{ type }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { event } from 'vue-analytics';


export default {
    props: {
        title: {
            type: String,
            required: true
        },
        
        documentTypes: {
            type: Array,
            required: true
        },

        defaultIndex: {
            type: Number,
            required: false,
            default: 0
        },
    },

    data() {
        return {
            selectedIndex: this.defaultIndex,
        };
    },

    created() {
        this.addEventListenerFunc();
    },

    beforeDestroy() {
        this.removeEventListenerFunc();
    },
    watch: {
        defaultIndex(newIndex) {
            this.selectedIndex = newIndex;
        }
    },
    computed: {
        optionsData() {
            return this.documentTypes;
        },
    },

    methods: {
        addEventListenerFunc() {
            document.addEventListener("wheel", this.handleMouseScroll);
            document.addEventListener("keydown", this.handleArrowKeys);
        },
        removeEventListenerFunc() {
            document.removeEventListener("wheel", this.handleMouseScroll);
            document.removeEventListener("keydown", this.handleArrowKeys);
        },

        handleMouseScroll(event) {
            const deltaY = event.deltaY;

            if (deltaY > 0) {
                this.changeGroupIndex(1);
            } else if (deltaY < 0) {
                this.changeGroupIndex(-1);
            }
        },

        handleArrowKeys(event) {
            const keyHandlers = {
                ArrowUp: () => this.changeGroupIndex(-1),
                ArrowDown: () => this.changeGroupIndex(1),
                Enter: () => this.handleEnterKey(event),

            };

            const handler = keyHandlers[event.key];
            if (handler) handler();
        },

        handleEnterKey(event) {
            if (this.selectedIndex >= 0 && this.selectedIndex < this.optionsData.length) {
                this.$emit('select', this.optionsData[this.selectedIndex], event);
            }
        },

        changeGroupIndex(direction) {
            const newIndex = this.selectedIndex + direction;
            if (newIndex >= 0 && newIndex < this.optionsData.length) {
                this.selectedIndex = newIndex;
            }
            // this.scrollToSelectedRow();
        },

        handleItemClick(index) {
            this.selectedIndex = index;
        },


        closePopup() {
            this.$emit('update:visible', false); // Emit the event to close the popup
        },

        selectDocumentType(type) {
            this.$emit('select', type); // Emit the selected document type
            this.closePopup();
        }

    },

    mounted() {

    },
};
</script>

<style scoped>
.custom-popup-overlay {
    position: fixed;
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center; */
    /* z-index: 9999; */
}

.custom-popup-container[data-v-b5ba41f8][data-v-b5ba41f8] {
    background: rgb(244 255 237);
    /* padding: 10px; */
    width: 6rem;
    border: 1px solid #5bbc21;
    /* border-radius: 8px; */
}

.popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul.customUl {
    margin: 11px 0;
}

.customLi {
    padding: 2px 8px;
    cursor: pointer;
}

span.titleHead[data-v-b5ba41f8] {
    font-weight: 500;
    background: rgb(91 188 33);
    width: 100%;
    padding: 2px 5px 2px 5px;
    /* margin: 0; */
    font-size: 15px;
    color: white;
}

.focused {
    background-color: rgba(254, 197, 48, 255);
}

/* li:hover {
    background-color: #f0f0f0;
  } */
</style>
