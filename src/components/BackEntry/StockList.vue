<template>
    <div class="stock_item_popup">
        <h5>List of Stock Items</h5>
        <ul id="itemList" class="OverflowLedgerListIndexingHeightSet">
            <li v-for="(list, index) in stockList" :key="index" :class="{ selected: selectedIndex === index }"
                @click="handleItemClick(index)" @dblclick="handleEnterKey">
                <span class="item-name">{{ list.name }}</span>
                <span v-if="list.name !== 'End of List'" class="item-quantity">{{ formatQuantity(list.quantity)
                    }}</span>
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

        defaultIndex: {
            type: Number,
            required: false,
        },
    },

    data() {
        return {
            //   stockList: this.listData,
            selectedIndex: this.defaultIndex,
        };
    },

    watch: {
        defaultIndex(newIndex) {
            this.selectedIndex = newIndex;
            this.scrollToSelectedRow();
        }
    },

    created() {
        // console.log("stockList Created");
        this.addEventListenerFunc();
    },

    beforeDestroy() {
        // console.log("legerList destroyed");
        this.removeEventListenerFunc();
    },

    computed: {
        stockList() {
            if (this.listData.length == 1) {
                this.selectedIndex = 0;
            }
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

        formatQuantity(quantity) {
            if (!quantity) return '';
            const [value, unit] = quantity.split(" ");
            const absValue = Math.abs(parseFloat(value)).toFixed(4);
            return value.startsWith('-') ? `(-)${absValue} ${unit}` : `${absValue} ${unit}`;
        },

        handleMouseScroll(event) {
            // Use deltaY to determine the direction of the scroll
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
                // Escape: () => this.handleEnterKey(),
                // Space: () => this.handleEnterKey(),
                // PageUp: () => this.changeGroupIndex(-10),
                // PageDown: () => this.changeGroupIndex(10),
            };

            const handler = keyHandlers[event.key];
            if (handler) handler();
        },

        handleEnterKey() {
            if (this.selectedIndex >= 0 && this.selectedIndex < this.stockList.length) {
                this.$emit('stockItem-selected', this.stockList[this.selectedIndex]);
            }
        },

        changeGroupIndex(direction) {
            const newIndex = this.selectedIndex + direction;
            if (newIndex >= 0 && newIndex < this.stockList.length) {
                this.selectedIndex = newIndex;
            }

            this.scrollToSelectedRow();
        },

        handleItemClick(index) {
            this.selectedIndex = index;
        },

        // handleDoubleClick() { 
        //   this.$emit("ledger-selected", this.stockList[this.selectedIndex].ledgerName);
        // }

        scrollToSelectedRow() {
            this.$nextTick(() => {
                const selectedRow = document.querySelector(".selected");
                if (selectedRow) {
                    // const container = selectedRow.closest(
                    //   ".select-shut-company-flow-boxes"
                    // );
                    const container = selectedRow.closest(
                        ".OverflowLedgerListIndexingHeightSet"
                    );
                    const containerRect = container.getBoundingClientRect();
                    const rowRect = selectedRow.getBoundingClientRect();

                    const rowBottomOffset = rowRect.top + rowRect.height;
                    const containerBottomOffset =
                        containerRect.top + containerRect.height;

                    // Check if selected row is at the bottom of the container
                    if (rowBottomOffset > containerBottomOffset) {
                        container.scrollTop += rowBottomOffset - containerBottomOffset;
                    }
                    // Check if selected row is at the top of the container
                    else if (rowRect.top < containerRect.top) {
                        container.scrollTop -= containerRect.top - rowRect.top;
                    }

                    // Scroll to top if looped back to the first row
                    if (this.selectedIndex === 0 && container.scrollTop !== 0) {
                        container.scrollTop = 0;
                    }
                }

                // if (this.selectedIndex == this.ledgerList.length - 3) {
                //   this.isLastIndexOfLedgerList();
                // }
            });
        },

    },

    mounted() {
        // If you need to do something when the component is mounted
        // this.handleItemClick(this.selectedIndex);
    },
};
</script>

<style>

</style>