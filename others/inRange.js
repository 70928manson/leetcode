// 實作一個函式 inRange 。此函式接受三個參數：

// value：要檢查的數值
// start：範圍的下限 (範圍包含 start)，預設為 0
// end：範圍的上限 (範圍不包含 end)

// 在實作時，要同時考量以下條件：

// 預設行為：如果僅提供兩個參數，則第二個參數被視為 end，而 start 此時預設為 0，這樣會讓使用該函式的人，在正數範圍內能更簡易地使用
// 負數範圍：如果 start 大於 end，inRange 會交換參數以正確處理負數範圍，確保在正負數都能被處理
// 輸出：inRange 函式輸出會是一個 Boolean

function inRange(checkValue, start, end=0) {
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    return checkValue >= start && checkValue < end;
}