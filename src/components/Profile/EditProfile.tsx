/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Save, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form } from "../ui/form";
import { Dispatch, SetStateAction } from "react";

import { useUpdateMyDataMutation } from "../../redux/features/user/userApi";
import { errorMessageGenerator } from "../../utils/errorMessageGenerator";
import { uploadImageToCloudinary } from "../../utils/uploadImageToCloudinary";
import EditUserForm from "./EditUserForm";
import { TUserData } from "../../types";

type FormValues = {
  name: string;
  contactNumber: string;
  address?: string;
  profileImage?: File | undefined;
};

type UserDataType = {
  name: string;
  contactNumber: string;
  address?: string;
  profile?: string;
};

type PropTypes = {
  userData: TUserData;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
};

export default function EditProfileForm({ userData, setIsEditing }: PropTypes) {
  const [updateMyData, { isLoading }] = useUpdateMyDataMutation();

  const form = useForm<FormValues>({
    defaultValues: {
      name: userData.name || "",
      address: userData.address || "",
      contactNumber: userData.contactNumber || "",
      profileImage: undefined,
    },
  });

  const onSubmit = async (formData: FormValues) => {
    const toastId = toast.loading("User Data is updating...");
    const userNewData: UserDataType = {
      name: formData.name,
      address: formData.address,
      contactNumber: formData.contactNumber,
      profile: userData.profile || "",
    };

    try {
      if (formData.profileImage) {
        const imageUrl = await uploadImageToCloudinary(formData.profileImage);
        if (imageUrl) {
          userNewData.profile = imageUrl;
        }
      }

      await updateMyData(userNewData).unwrap();
      toast.success("Profile updated successfully!", {
        id: toastId,
        duration: 2000,
      });
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      toast.error(errorMessageGenerator(err), { id: toastId });
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <EditUserForm
          form={form as any}
          isLoading={isLoading}
          userData={userData}
        />
        <CardFooter className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="flex items-center gap-1"
          >
            <X size={16} />
            Cancel
          </Button>
          <Button className="flex items-center gap-1" disabled={isLoading}>
            <Save size={16} />
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </CardFooter>
      </form>
    </Form>
  );
}
