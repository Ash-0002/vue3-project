<template>
    <div class="voucher_ledger_popup CreateVoucherLedgerPopupList">
        <h5>List of {{ listTitle }}</h5>
        <ul id="itemList" class="">
            <li v-for="(list, index) in godownList" :key="index" :class="{ selected: selectedIndex === index }"
                @click="handleItemClick(index)" @dblclick="handleEnterKey">
                {{  list.name }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        listData: {
            type: Array,
            required: true,
        },

        listTitle: {
            type: String,
            required: true,
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
            console.log(newIndex + "hehehehehehehehh");
            this.selectedIndex = newIndex;
            //   this.scrollToSelectedRow();
        }
    },
    computed: {
        godownList() {
            return this.listData;
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
                Enter: () => this.handleEnterKey(),

            };

            const handler = keyHandlers[event.key];
            if (handler) handler();
        },

        handleEnterKey() {
            if (this.selectedIndex >= 0 && this.selectedIndex < this.godownList.length) {
                this.$emit('priceLevel-selected', this.godownList[this.selectedIndex].name);
            }
        },

        changeGroupIndex(direction) {
            const newIndex = this.selectedIndex + direction;
            if (newIndex >= 0 && newIndex < this.godownList.length) {
                this.selectedIndex = newIndex;
            }
            // this.scrollToSelectedRow();
        },

        handleItemClick(index) {
            this.selectedIndex = index;
        },

        // scrollToSelectedRow() {
        //     this.$nextTick(() => {
        //         const selectedRow = document.querySelector(".selected");
        //         if (selectedRow) {
        //             const container = selectedRow.closest(".OverflowLedgerListIndexingHeightSet");
        //             const containerRect = container.getBoundingClientRect();
        //             const rowRect = selectedRow.getBoundingClientRect();

        //             const rowBottomOffset = rowRect.top + rowRect.height;
        //             const containerBottomOffset = containerRect.top + containerRect.height;

        //             // Check if selected row is at the bottom of the container
        //             if (rowBottomOffset > containerBottomOffset) {
        //                 container.scrollTop += rowBottomOffset - containerBottomOffset;
        //             }
        //             // Check if selected row is at the top of the container
        //             else if (rowRect.top < containerRect.top) {
        //                 container.scrollTop -= containerRect.top - rowRect.top;
        //             }

        //             // Scroll to top if looped back to the first row
        //             if (this.selectedIndex === 0 && container.scrollTop !== 0) {
        //                 container.scrollTop = 0;
        //             }
        //         }
        //     });
        // },

    },

    mounted() {

    },
};
</script>
