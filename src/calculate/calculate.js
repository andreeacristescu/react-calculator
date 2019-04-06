
import Big from "big.js";
import operate from "./operate";
import verifyNumber from "./verifyNumber";

export default function calculate(obj, buttonName) {
    // Clears the calculator and resets any functions.
    if (buttonName === "CLEAR") {
        return {
            total: null,
            next: null,
            operation: null,
        };
    }

    if (verifyNumber(buttonName)) {
        if (buttonName === "0" && obj.next === "0") {
            return {};
        }
        // If there is an operation then update next.
        if (obj.operation) {
            if (obj.next) {
                return { next: obj.next + buttonName };
            }
            return { next: buttonName };
        }
        // If there is no operation then update next one and clear the value.
        if (obj.next) {
            return {
                next: obj.next + buttonName,
                total: null,
            };
        }
        return {
            next: buttonName,
            total: null,
        };
    }

    // Percentage in an equation.
    if (buttonName === "%") {
        if (obj.operation && obj.next) {
            const result = operate(obj.total, obj.next, obj.operation);
            return {
                total: Big(result)
                    .div(Big("100"))
                    .toString(),
                next: null,
                operation: null,
            };
        }
        if (obj.next) {
            return {
                next: Big(obj.next)
                    .div(Big("100"))
                    .toString(),
            };
        }
        return {};
    }

    if (buttonName === ".") {
        if (obj.next) {
            // Ignore . if the next number already has one.
            if (obj.next.includes(".")) {
                return {};
            }
            return { next: obj.next + "." };
        }
        return { next: "0." };
    }

    if (buttonName === "=") {
        if (obj.next && obj.operation) {
            return {
                total: operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null,
            };
        } else {
            //  If there is an '=' with no operation, there is nothing to do.
            return {};
        }
    }

    if (buttonName === "+/-") {
        if (obj.next) {
            return { next: (-1 * parseFloat(obj.next)).toString() };
        }
        if (obj.total) {
            return { total: (-1 * parseFloat(obj.total)).toString() };
        }
        return {};
    }

    // When the user pressed an operation button but there is an existing operation.
    if (obj.operation) {
        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName,
        };
    }

    // The user hasn't typed a number yet, just save the operation.
    if (!obj.next) {
        return { operation: buttonName };
    }

    return {
        total: obj.next,
        next: null,
        operation: buttonName,
    };
}