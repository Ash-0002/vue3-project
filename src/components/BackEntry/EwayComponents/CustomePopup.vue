<template>
    <div class="custom-popup-overlay" @click.self="closePopup">
        <div class="custom-popup-container">
            <div class="popup-header">
                <span class="titleHead">{{ title }}</span>
                <!-- <button @click="closePopup">X</button> -->
            </div>
            <ul>
                <li v-for="(type, index) in listOfTypes" :class="{ selected: selectedIndex === index }" :key="index">
                    {{ type.description }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        // visible: {
        //     type: Boolean,
        //     required: true
        // },
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
        }
    },

    watch: {
        defaultIndex(newIndex) {
            this.selectedIndex = newIndex;
            // this.scrollToSelectedRow();
        }
    },

    computed: {
        listOfTypes() {
            if (this.documentTypes.length == 1) {
                this.selectedIndex = 0;
            }

            return this.documentTypes;
        },
    },


    created() {
        this.addEventListenerFunc();
    },

    beforeDestroy() {
        this.removeEventListenerFunc();
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
                Enter: () => this.selectDocumentType(),

            };

            const handler = keyHandlers[event.key];
            if (handler) handler();
        },

        changeGroupIndex(direction) {
            const newIndex = this.selectedIndex + direction;
            if (newIndex >= 0 && newIndex < this.listOfTypes.length) {
                this.selectedIndex = newIndex;
            }
        },

        closePopup() {
            this.$emit('update:visible', false); // Emit the event to close the popup
        },

        selectDocumentType() {
            this.$emit('select', this.listOfTypes[this.selectedIndex]); // Emit the selected document type
            // this.closePopup();
        }
    }
}
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

.custom-popup-container {
    background: #F4FFED;
    /* background: rgba(226, 241, 252, 255); */
    /* padding: 10px; */
    width: 161px;
    border: 1px solid black;
    /* border-radius: 8px; */
}

.popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul[data-v-6786dec3] {
    list-style-type: none;
    padding: 10px 0px;
    margin: 0;
}

li {
    padding: 2px 8px;
    cursor: pointer;
}

span.titleHead {
    font-weight: 500;
    /* background: rgba(42, 103, 177, 255); */
    background: #5BBC21;
    width: 100%;
    padding: 2px 5px 2px 5px;
    /* margin: 0; */
    font-size: 15px;
    color: white;
}

/* .focused {
    background-color: rgba(254, 197, 48, 255);
} */

/* li:hover {
    background-color: #f0f0f0;
  } */
</style>