'use client';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocalStorage } from '@uidotdev/usehooks';
import FormLayout from '@/components/formLayout';
import Checkbox from '@/components/checkbox';
import { apiPostSignup } from '@/assets/api';

export default function Register() {}
