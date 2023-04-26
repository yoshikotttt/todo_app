


const now = new Date();  // 現在の日時を取得
const year = now.getFullYear();  // 年を取得
const month = now.getMonth() + 1;  // 月を取得（0から始まるので+1する）

function generateCalendar(year, month) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    
    // カレンダーのヘッダーを生成
    const headerRow = document.createElement('tr');
    const headers = ['日', '月', '火', '水', '木', '金', '土'];
    for (const header of headers) {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    }
    tbody.appendChild(headerRow);
    
    // 指定された年月の日数を取得
    const lastDate = new Date(year, month, 0).getDate();
    
    // カレンダーの日付部分を生成
    let date = 1;
    for (let week = 0; week < 6; week++) {
      const row = document.createElement('tr');
      for (let day = 0; day < 7; day++) {
        const cell = document.createElement('td');
        if (week === 0 && day < new Date(year, month - 1, 1).getDay()) {
          // 先月の日付
          cell.classList.add('prev-month');
          cell.textContent = new Date(year, month - 1, 0).getDate() - new Date(year, month - 1, 1).getDay() + day + 1;
        } else if (date > lastDate) {
          // 来月の日付
          cell.classList.add('next-month');
          cell.textContent = date - lastDate;
          date++;
        } else {
          // 今月の日付
          cell.textContent = date;
          date++;
        }
        row.appendChild(cell);
      }
      tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
    return table;
  }



const calendar = generateCalendar(year, month);  // カレンダーを生成
$('#calendar').append(calendar);  // カレンダーを親要素に追加



  

