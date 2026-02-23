import { useState } from "react"
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import { natureIcon } from "../../../../../constants";

const CreateModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="create-modal">
      <Button onClick={() => setOpenModal(true)}>Create</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader className="border-0">Create Feature</ModalHeader>
        <ModalBody>
          <p className="text-sm text-gray-500 mb-3">Required fields are marked with an asterisk *</p>

          <div className="space-y-6">
            <div>
              <label htmlFor="space" className="text-sm mb-1 text-gray-600">Space *</label>
              <Dropdown id="space" className="border" color={"white"} label={<div className="flex gap-2"><img src={natureIcon} width={20} className="rounded" /><p>Your team</p></div>} >
                <DropdownItem ><div className="flex gap-2"><img src={natureIcon} width={20} className="rounded" /><p>Your team</p></div></DropdownItem>
              </Dropdown>
            </div>

            <div>
              <label htmlFor="status" className="text-sm mb-1 text-gray-600">Status</label>
              <Dropdown id="status" name="status" className="border" color={"white"} label={"Open"} >
                <DropdownItem >in-progress</DropdownItem>
                <DropdownItem>open</DropdownItem>
                <DropdownItem>done</DropdownItem>
              </Dropdown>
            </div>

            <div className="flex flex-col">
              <label htmlFor="summary" className="text-sm text-gray-600">Summary</label>
              <input name="summary" id="summary" className="border w-100"></input>
            </div>

            <p className="text-sm text-gray-500">This is the initial status upon creation</p>
            <div className="flex flex-col">
              <label htmlFor="desc" className="text-sm text-gray-600">Description</label>
              <textarea name="description" id="desc" className="border w-100"></textarea>
            </div>

            <div>
              <label htmlFor="assignedTo">Assignee</label>
              <Dropdown id="assignedTo" name="status" className="border" color={"white"} label={"Unassigned"} >
                <DropdownItem >Unassigned</DropdownItem>
              </Dropdown>
            </div>

            <div>
              <label htmlFor="priority" className="text-sm mb-1 text-gray-600">Priority</label>
              <Dropdown id="priority" name="priority" className="border" color={"white"} label={"low"} >
                <DropdownItem >low</DropdownItem>
                <DropdownItem>medium</DropdownItem>
                <DropdownItem>high</DropdownItem>
              </Dropdown>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModal(false)}>Create</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default CreateModal