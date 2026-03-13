    const activity = document.getElementById('activity')
    const date = document.getElementById('date');
    const button = document.getElementById('button');
    const table = document.getElementById('table');
    const requiredFieldInput = document.getElementById('required-field-input');
    const requiredFieldDate = document.getElementById('required-field-date');


    class tabella{
        #activity;
        #date
        #button;
        #table;
        #requiredFieldInput;
        #requiredFieldDate;

        constructor(activity, date, button, table, requiredFieldInput, requiredFieldDate ){
            this.#activity = activity;
            this.#date = date;
            this.#button = button;
            this.#table = table;
            this.#requiredFieldInput =requiredFieldInput;
            this.#requiredFieldDate = requiredFieldDate;
        }

        #createButton(tr){
            const tdDo = document.createElement('td');
            const tdDelte = document.createElement('td');

            const buttonDo = document.createElement('button');
            const buttonDelete = document.createElement('button');

            buttonDo.classList.add('button-done');
            buttonDelete.classList.add('button-delete');

            buttonDo.textContent = 'fatto';
            buttonDelete.textContent = 'elimina';

            buttonDelete.addEventListener('click', () => tr.remove());
            buttonDo.addEventListener('click', () =>{
                tr.style.backgroundColor = '#FF9900';
            })

            tdDo.appendChild(buttonDo);
            tdDelte.appendChild(buttonDelete);

            tr.appendChild(tdDo);
            tr.appendChild(tdDelte);
        }

        createRow() {
            this.#requiredFieldInput.textContent = '';
            this.#requiredFieldDate.textContent = '';

    
            if (this.#activity.value.trim() === '' || this.#date.value === '') {
                if (this.#activity.value.trim() === '') {
                    this.#requiredFieldInput.textContent = '*campo obbligatorio';
                }
                if (this.#date.value === '') {
                    this.#requiredFieldDate.textContent = '*campo obbligatorio';
                }
            }else {
        
                const tr = document.createElement('tr');
                const tdDate = document.createElement('td');
                const tdText = document.createElement('td');

                tdDate.textContent = this.#date.value;
                tdText.textContent = this.#activity.value;

                tr.appendChild(tdDate);
                tr.appendChild(tdText);

                this.#createButton(tr);
                this.#table.appendChild(tr);

        
                this.#activity.value = '';
                this.#date.value = '';
    }
}

        press(){
            this.#button.addEventListener('click', () => this.createRow());
        }

    }


    const myTable = new tabella(activity, date, button, table, requiredFieldInput, requiredFieldDate);

    myTable.press();