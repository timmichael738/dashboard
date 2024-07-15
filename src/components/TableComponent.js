import React from 'react';
import Table from './Tables/TableFullWidth';

const data = [
    { content1: 1, content2: 'Lindsay Walton', content3: 'Front-end Developer', content4: 'Member' },
    { content1: 2, content2: 'Courtney Henry', content3: 'Designer', content4: 'Admin' },
    { content1: 3, content2: 'Tom Cook', content3: 'Director of Product', content4: 'Member' },
    { content1: 4, content2: 'Whitney Francis', content3: 'Copywriter', content4: 'Admin' },
    { content1: 5, content2: 'Leonard Krasner', content3: 'Senior Designer', content4: 'Owner' }
];



function TableComponent() {
    return (
        <>
        
            <div className="overflow-y-auto max-h-screen container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Table
                        containerStyle={`overflow-x-auto p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder`}
                        tableStyle={`min-w-full divide-y divide-gray-200`}
                        TableHeadStyle={`bg-gray-50`}
                        headerText='Table Full Width'
                        header1={`#`}
                        header2={`Name`}
                        header3={`Title`}
                        header4={`Role`}
                        data={data} />
                    <Table
                        containerStyle={`overflow-x-auto p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder`}
                        tableStyle={`min-w-full divide-y divide-gray-200`}
                        TableHeadStyle={`bg-gray-50`}
                        headerText='Table Hover'
                        header1={`#`}
                        header2={`Name`}
                        header3={`Title`}
                        header4={`Role`}
                        data={data} />
                    <Table
                        containerStyle={`overflow-x-auto p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder`}
                        tableStyle={`min-w-full divide-y divide-gray-200`}
                        TableHeadStyle={`bg-gray-50`}
                        headerText='Captions With Icon'
                        header1={`#`}
                        header2={`Name`}
                        header3={`Title`}
                        header4={`Role`}
                        data={data} />
                    <Table
                        containerStyle={`overflow-x-auto p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder`}
                        tableStyle={`min-w-full divide-y divide-gray-200`}
                        TableHeadStyle={`bg-gray-50`}
                        headerText='Table With Checkbox'
                        header1={`#`}
                        header2={`Name`}
                        header3={`Title`}
                        header4={`Role`}
                        data={data} />
                    <Table
                        containerStyle={`overflow-x-auto p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder`}
                        tableStyle={`min-w-full divide-y divide-gray-200`}
                        TableHeadStyle={`bg-gray-50`}
                        headerText='Table Action'
                        header1={`#`}
                        header2={`Name`}
                        header3={`Title`}
                        header4={`Role`}
                        data={data} />
                    <Table
                        containerStyle={`overflow-x-auto p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder`}
                        tableStyle={`min-w-full divide-y divide-gray-200`}
                        TableHeadStyle={`bg-gray-50`}
                        headerText='Table Striped'
                        header1={`#`}
                        header2={`Name`}
                        header3={`Title`}
                        header4={`Role`}
                        data={data} />
                    <Table
                        containerStyle={`overflow-x-auto p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder`}
                        tableStyle={`min-w-full divide-y divide-gray-200`}
                        TableHeadStyle={`bg-gray-50`}
                        headerText='Table Borderless'
                        header1={`#`}
                        header2={`Name`}
                        header3={`Title`}
                        header4={`Role`}
                        data={data} />
                </div>
            </div>

        </>
    );
}

export default TableComponent;
